'use strict';

const adsSdk = require('../dist/cjs');
const testConfig = require('./test-config');

const Ad = adsSdk.Ad;
const AdAccount = adsSdk.AdAccount;
const Business = adsSdk.Business;
const Campaign = adsSdk.Campaign;

const businessId = testConfig.businessId;
const campaignId = testConfig.campaignId;

const api = adsSdk.FacebookAdsApi.init(testConfig.accessToken);

api.setDebug(true);

const account = new AdAccount(testConfig.accountId);

const insightsFields = ['impressions', 'frequency', 'unique_clicks', 'actions', 'spend', 'cpc'];

describe('Basic tests', () => {
    it('Node.js read', () => account.read([AdAccount.Fields.name, AdAccount.Fields.age]));

    it('Node.js get active ads', () => account.getAds([], {[Ad.Fields.effective_status]: [Ad.EffectiveStatus.active]}));

    it('Node.js getInsights Edge', () => new Campaign(campaignId).getInsights(insightsFields, {}));

    it('Node.js getCampaigns Edge', () => account.getCampaigns([Campaign.Fields.objective], {limit: 2}));

    it.skip('Node.js getAssignedPages Edge',
        () => new Business(businessId, {limit: 2}).getAssignedPages([Business.Fields.name], {}, true));

    it('Node.js nestedCalls', () =>
        account
            .read([AdAccount.Fields.name])
            .then(account => account.getCampaigns([Campaign.Fields.name], {limit: 10}))
            .then(result => {
                const campaignIds = result.map((campaign) => {
                    return campaign.id;
                });

                const campaignAdsInsightsParams = Object.assign({
                    level: 'campaign',
                    filtering: [{field: 'campaign.id', operator: 'IN', value: campaignIds}]
                }, {});

                const campaignsAdsInsightsFields = insightsFields.concat('campaign_id');

                return account.getInsights(campaignsAdsInsightsFields, campaignAdsInsightsParams);
            }));

    it('Create Edge', () =>
        account
            .createCampaign([], {
                [Campaign.Fields.name]: 'Test Campaign - Delete',
                [Campaign.Fields.status]: Campaign.Status.paused,
                [Campaign.Fields.objective]: Campaign.Objective.page_likes
            }));

    it.skip('Delete Image Edge', () => {
        const bytes =
            'iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAOVBMVEX///87WZg7WZg7WZg7WZg7WZg7WZg7WZg7WZg7WZ' +
            'g7WZhMeMJEaa5Xi9tKdb0+Xp5Wi9tXjNxThNH+wk/7AAAACnRSTlMAsHIoaM7g/fx9Zr/g5QAAAGlJREFUeNplkFsOwCAI' +
            'BPGJrtbX/Q/bqm1qwnxuJrBAE6OVD15pQy/WYePsDiIjp9FGyuC4DK7l6pOrVH4s41D6R4EzpJGXsa0MTQqp/yQo8hhHMu' +
            'ApoB1JQ5COnCN3yT6ys7xL3i7/cwMYsAveYa+MxAAAAABJRU5ErkJggg==';

        return account
            .createAdImage([], {bytes: bytes})
            .then(result => account.deleteAdImages({hash: result.images.bytes.hash}));
    });

    it.skip('CRUD Campaign', () => {
        let campaignIdToDelete;

        return account
            .createCampaign(
                [Campaign.Fields.status],
                {
                    [Campaign.Fields.name]: 'Test Campaign - Delete',
                    [Campaign.Fields.status]: Campaign.Status.paused,
                    [Campaign.Fields.objective]: Campaign.Objective.page_likes
                }
            )
            .then((campaign) => {
                campaignIdToDelete = campaign.id;

                return new Campaign(campaign.id)
                    .read([Campaign.Fields.id, Campaign.Fields.name, Campaign.Fields.objective]);
            })
            .then((campaign) => {
                const campaignUpdate = {
                    [Campaign.Fields.id]: campaign.id,
                    [Campaign.Fields.name]: 'Test Campaign - Updated'
                };

                return new Campaign(campaign.id, campaignUpdate).update();
            })
            .then(() => new Campaign(campaignIdToDelete).delete())
    });

    it.skip('Pagination Campaign', () =>
        account
            .getCampaigns([Campaign.Fields.name], {limit: 2})
            .then((campaigns) => {
                if (campaigns.length === 2 && campaigns.hasNext()) {
                    return campaigns.next();
                } else {
                    Promise.reject(new Error('campaigns length != 2 or not enough campaigns'));
                }
            })
            .then((campaigns) => {
                if (campaigns.hasNext() && campaigns.hasPrevious()) {
                    return campaigns.previous();
                } else {
                    Promise.reject(new Error('previous or next is not true'));
                }

                return campaigns.previous();
            }));
});
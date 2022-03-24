const botService = (page) => {
  const attachment = getAdaptiveCardForUrl("https://teams-test-tab.azurewebsites.net", page);
  const result = {
    attachmentLayout: "list",
    type: "result",
    attachments: [attachment],
    responseType: "composeExtension"
  };
  const response = {
    composeExtension: result
  };
  return response;
};

function getAdaptiveCardForUrl(url, page) {
  const contentUrl = `${url}/${page}`;
  const websiteUrl = `${url}/${page}`;
  const adaptiveCardJson = {
    contentType: "application/vnd.microsoft.card.adaptive",
    content: {
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "TextBlock",
          size: "Medium",
          weight: "Bolder",
          text: `Test Tab Page ${page && page.toUpperCase()}`
        }
      ],
      actions: [
        {
          type: "Action.OpenUrl",
          title: "Outside Teams",
          url: websiteUrl
        },
        {
          type: "Action.Submit",
          title: "View",
          data: {
            msteams: {
              type: "invoke",
              value: {
                type: "tab/tabInfoAction",
                tabInfo: {
                  contentUrl: contentUrl,
                  websiteUrl: websiteUrl,
                  name: "Page",
                  entityId: "entityId"
                }
              }
            }
          }
        }
      ]
    },
    preview: {
      content: {
        title: "Page",
        text: `Test Tab Page ${page && page.toUpperCase()}`,
        images: [
          {
            url: "https://statics.teams.cdn.office.net/evergreen-assets/apps/2c19df50-1c3c-11ea-9327-cd28e4b6f7ba_largeImage.png?v=0.1"
          }
        ]
      },
      contentType: "application/vnd.microsoft.card.thumbnail"
    }
  };
  return adaptiveCardJson;
};

module.exports = botService;

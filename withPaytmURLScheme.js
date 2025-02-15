const { withAppDelegate } = require("@expo/config-plugins");

const withPaytmURLScheme = (config) => {
  return withAppDelegate(config, async (config) => {
    const appDelegate = config.modResults;

    // Check if the import is already added
    if (!appDelegate.contents.includes("#import <React/RCTLinkingManager.h>")) {
      const importStatement = "#import <React/RCTLinkingManager.h>\n";
      appDelegate.contents = importStatement + appDelegate.contents;
    }

    // Add URL handling method if not present
//     if (!appDelegate.contents.includes("application:openURL:options")) {
//       const methodImplementation = `
// - (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
// {
//   NSString *urlString = url.absoluteString;
//   NSDictionary *userInfo = [NSDictionary dictionaryWithObject:urlString forKey:@"appInvokeNotificationKey"];
//   [[NSNotificationCenter defaultCenter] postNotificationName:@"appInvokeNotification" object:nil userInfo:userInfo];
//   return [RCTLinkingManager application:app openURL:url options:options];
// }
// `;

//       // Insert before @end
//       const lastIndex = appDelegate.contents.lastIndexOf("@end");
//       appDelegate.contents =
//         appDelegate.contents.slice(0, lastIndex) +
//         methodImplementation +
//         appDelegate.contents.slice(lastIndex);
//     }

    return config;
  });
};

module.exports = withPaytmURLScheme;

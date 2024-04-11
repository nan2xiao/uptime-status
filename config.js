window.Config = {
  // 显示标题
  SiteName: 'Uptime Status 统计',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [],

  // 日志天数
  CountDays: 28,

  // 是否显示检测站点的链接
  ShowLink: false,

  // 导航栏菜单
  Navi: [
//    {
//      text: '',
//      url: ''
//    },
  ],
};

// 从环境变量中读取 ApiKeys
const apiKeysString = env.API_KEYS;
if (apiKeysString) {
  // 使用逗号分割字符串，并去除空格
  const apiKeysArray = apiKeysString.split(',').map(apiKey => apiKey.trim());

  // 将拆分后的 ApiKeys 填充到 Config 中
  window.Config.ApiKeys = apiKeysArray;
}

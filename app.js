const Bot = require('./modules/bot');
const process = require('process');

require('./modules/date-format');

class Plugin extends Bot {
  constructor () {
    super();
  }
  async run () {
    const now = new Date().Format('M/d h:m:s')  ;
    //await this.sendImage('assets/geekbot.png');
    // 发送环境配置信息
    const CONF_DATA = `
## GeekBot Secrets Dump
> 备份导出您的项目\`secrets\`设置数据

## 1. \`bot_api\`
\`\`\`
${process.env.bot_api}
\`\`\`

## 2. \`caiyun_gps\`
\`\`\`
${process.env.secrets_caiyun_gps}
\`\`\`

## 3. \`caiyun_key\`
\`\`\`
${process.env.secrets_caiyun_key}
\`\`\`

## 4. \`goodmring_key\`
\`\`\`
${process.env.secrets_GOOD_MORNING_key}
\`\`\`

> 导出时间：${now}
> https://github.com/loa123/WXworkRobot`;
    const f = await this.uploadFile("配置数据备份.md", Buffer.from(CONF_DATA));
    await this.sendFile(f);
    await this.sendMarkdown("🤖 Hello! GeekBot!\n> 项目地址：[@GeekBot](https://github.com/loa123/WXworkRobot)\n> 启动时间：" + now ); //修正为北京时间

    // test env
    // const $f = await this.uploadFile("env.txt", new Buffer(JSON.stringify(process.env)));
    // await this.sendFile($f);
  }
}

new Plugin().run();

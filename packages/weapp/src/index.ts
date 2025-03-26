/**
 * 微信小程序平台特定功能实现
 */

export const isWeapp = (): boolean => {
  // uni-app环境下判断是否为微信小程序平台
  if (typeof uni !== 'undefined') {
    const sys = uni.getSystemInfoSync();
    return sys.platform === 'mp-weixin';
  }
  return false;
};

/**
 * 微信小程序平台特有的API调用示例
 */
export const callWeappSpecificAPI = (options: { name: string }): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!isWeapp()) {
      reject(new Error('当前不是微信小程序平台'));
      return;
    }
    
    // 这里实现微信小程序平台特有的API调用
    console.log(`调用微信小程序平台特有API: ${options.name}`);
    resolve({ success: true, platform: 'mp-weixin' });
  });
};

export default {
  isWeapp,
  callWeappSpecificAPI
}; 
/**
 * 支付宝小程序平台特定功能实现
 */

export const isAliapp = (): boolean => {
  // uni-app环境下判断是否为支付宝小程序平台
  if (typeof uni !== 'undefined') {
    const sys = uni.getSystemInfoSync();
    return sys.platform === 'mp-alipay';
  }
  return false;
};

/**
 * 支付宝小程序平台特有的API调用示例
 */
export const callAliappSpecificAPI = (options: { name: string }): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!isAliapp()) {
      reject(new Error('当前不是支付宝小程序平台'));
      return;
    }
    
    // 这里实现支付宝小程序平台特有的API调用
    console.log(`调用支付宝小程序平台特有API: ${options.name}`);
    resolve({ success: true, platform: 'mp-alipay' });
  });
};

export default {
  isAliapp,
  callAliappSpecificAPI
}; 
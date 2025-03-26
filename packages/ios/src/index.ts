/**
 * iOS平台特定功能实现
 */

export const isIOS = (): boolean => {
  // uni-app环境下判断是否为iOS平台
  if (typeof uni !== 'undefined') {
    const sys = uni.getSystemInfoSync();
    return sys.platform === 'ios';
  }
  return false;
};

/**
 * iOS平台特有的API调用示例
 */
export const callIOSSpecificAPI = (options: { name: string }): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!isIOS()) {
      reject(new Error('当前不是iOS平台'));
      return;
    }
    
    // 这里实现iOS平台特有的API调用
    console.log(`调用iOS平台特有API: ${options.name}`);
    resolve({ success: true, platform: 'ios' });
  });
};

export default {
  isIOS,
  callIOSSpecificAPI
}; 
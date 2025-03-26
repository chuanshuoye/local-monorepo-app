/**
 * Android平台特定功能实现
 */

export const isAndroid = (): boolean => {
  // uni-app环境下判断是否为Android平台
  if (typeof uni !== 'undefined') {
    const sys = uni.getSystemInfoSync();
    return sys.platform === 'android';
  }
  return false;
};

/**
 * Android平台特有的API调用示例
 */
export const callAndroidSpecificAPI = (options: { name: string }): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!isAndroid()) {
      reject(new Error('当前不是Android平台'));
      return;
    }
    
    // 这里实现Android平台特有的API调用
    console.log(`调用Android平台特有API: ${options.name}`);
    resolve({ success: true, platform: 'android' });
  });
};

export default {
  isAndroid,
  callAndroidSpecificAPI
}; 
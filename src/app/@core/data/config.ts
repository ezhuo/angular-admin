/**
 *系统配置
 */
export class appConfig {
  /**
   *系统配置
   */
  app: any = {
    title: 'ezhuo', //系统名称
    code: 'ezhuo',
    ver: '1.0'
  };

  /**
   *API
   */
  api: any = {
    base: 'api',
    upload: '/api/file/upload',
    down: '/uploads/',
    canton: 'canton/selectselectselect' //获取区域的默认URL
  };

  /**
   *区域设置
   */
  canton: any = {
    id: null, //默认区域ID
    fdn: null, //默认区域
    name: null
  };

  /**
   *默认定义
   */
  default: any = {
    //用户默认图片
    user_images: 'assets/images/user/default_user.png',

    sign_images: 'assets/images/images/nosign.png',

    //默认用户的图片
    user_cut_images: 'assets/images/user/default_user.png',

    //默认页记录数
    page_size: 20,

    //table page size
    table_page_size: 10
  };

  /**
   *路由配置
   */
  router: any = {
    home: 'app.dashboard',
    login: 'login.signin'
  };

  /**
   *HTTP配置
   */
  http: any = {
    //数据包发送格式，10是明文 11是密文
    packet_type: 10,

    //请求验证代码
    packet_check: 'ezhuo@20161016',

    http_code: {
      200: '',
      201: '',
      202: '',
      204: '',
      203: '',
      205: '',

      400: '',
      401: '',
      403: '',
      404: '在服务器端，没有找到该请求服务！',
      406: '重要：',
      410: '',
      411: '',
      412: '',
      422: '验证：',
      500: '服务器端异常！'
    }
  };
}

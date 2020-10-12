var prize=["","","hb","std","ddb","zl","up","ddb","hb","ddb","tys","ddb","aq","","up","hb","","ddb","wb","std","tys","hb","ddb","","xtd","ddb","up","tys","","ddb","std","hb","ddb","zl","xtd","","ddb","xtd","aq","up","hb","std","xtd","","ddb","tys","wb","hb","ddb","std","ddb","xtd","tys","","hb","up","xtd","ddb","zl","ddb","xtd","hb","","up","ddb","std","hb","tys","aq","ddb","std","up","ddb","wb","tys","",""];//奖品线路， 实际项目中此处应该为后台传参而不是前端生成

var frame_content=[
  {
    "title": "资料软件抵价券",
    "class": "zl",
    "info": "恭喜您获得了<300元资料软件抵价券>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "安全软件抵价券",
    "class": "aq",
    "info": "恭喜您获得了<1200元安全软件抵价券>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "网标抵价券",
    "class": "wb",
    "info": "恭喜您获得了<800元网标抵价券>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "小台灯碎片",
    "class": "xtd",
    "info": "恭喜您获得了<小台灯碎片>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "手提灯碎片",
    "class": "std",
    "info": "恭喜您获得了<手提灯碎片>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "太阳伞碎片",
    "class": "tys",
    "info": "恭喜您获得了<太阳伞碎片>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "U盘碎片",
    "class": "up",
    "info": "恭喜您获得了<U盘碎片>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "逗逗币",
    "class": "ddb",
    "info": "恭喜您获得了<逗逗币100>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "微信红包",
    "class": "hb",
    "info": "恭喜您获得了<微信红包（1-18元）>，请在微信公众号“品茗施工软件”中领取。"
  },
  {
    "title": "一等奖",
    "class": "firstPrize",
    "info": "恭喜您获得了<品茗施工资料软件一套>+<3988元大礼包一份>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "二等奖",
    "class": "secondPrize",
    "info": "恭喜您获得了<3988元大礼包一份>，请点击页面左上方“我的奖品”中查看详情。"
  },
  {
    "title": "很遗憾",
    "class": "nothing",
    "info": "很遗憾您与礼品相差了一个银河的距离，这次什么也没得到。"
  }
]//弹框的内容信息


var vm=new Vue({
  el:"#container",
  data:{
    prizes:[],//线路布局
    prizesLen:7,//每行线路的长度
    userShow:false,//是否显示用户头像
    userTop:0,//用户头像的top
    userLeft:0,//用户头像的left
    stepNum:1,//当前用户的起始步数 最小为1
    stepX:0,//每步移动的X值/格子宽
    stepY:0,//每步移动的Y值/格子高/行高
    stepForward:1,//每次移动的步数
    isActive:false,//跳一下的动画
    isForward:true,//是否正在前进
    isForwarding:false,//正在前进的提示信息
    dicePoints:"1",//骰子点数
    diceNum:5,//摇骰子次数
    diceTime:null,//是否摇骰子
    userOffseTop:0,//是否摇骰子
    popup_share:false,//分享弹框
    popup_prize:false,//奖品弹框
    popup_title:'',//弹框标题
    popup_class:'',//弹框class
    popup_info:''//弹框信息
  },
  methods:{
    dice:function () {//骰子开始摇动
      if(this.isForward){//是否正在前进

        if(this.diceNum===0){
          alert("您的游戏次数已用完~");
          return false;
        }
        this.diceNum--;

        var route = document.getElementById("route");
        this.userOffseTop=0;
        this.getTop(route);
        var routeHeight=route.clientHeight;
        var top = document.documentElement.clientHeight || document.body.clientHeight;

        this.scrollToTop(this.userOffseTop-top/2+routeHeight/2,500);//页面中点平滑滚动到用户头像处

        this.isForward=false;//正在前进中

        var i=1;
        this.diceTime=setInterval(function () {
          this.dicePoints='roll_'+i;
          i++;
          i>3?i=1:i;
        }.bind(this),500)

        setTimeout(function () {//2s后前进，实际项目中原本为后台返回的点数 f 和奖品信息 p 成功后，再调用 forward(f,p)并传参。
          this.forward();
        }.bind(this),2000)
      }else {//提示用户游戏正在进行中
        this.isForwarding=true;
        setTimeout(function (){ this.isForwarding=false }.bind(this),500)
      }
    },
    forward:function () {//开始前进 实际项目中原本为后台返回的点数 f 和奖品信息 p 成功后，再调用 forward(f,p)并传参。

      //实际项目中，参数f p 应该传参而不是生成。

      var f=this.randomNum(1,6),//生成随机步数
        p=prize[this.stepNum+f-1]===""?"nothing":prize[this.stepNum+f-1];//获得当前点数的奖品信息

      this.stepForward=f;//每次移动的步数

      for(var i=0;i<frame_content.length;i++){//获取奖品信息
        if(frame_content[i].class===p){
          this.popup_title=frame_content[i].title;//弹框标题
          this.popup_class=p;//弹框class
          this.popup_info=frame_content[i].info;//弹框信息
        }
      }

      clearInterval(this.diceTime);//骰子停止摇动
      this.dicePoints=this.stepForward;//显示点数

      this.bounce(1);//开始跳动
    },
    bounce:function (i) {//开始跳动
      if(this.stepNum>=77){//到达终点~

        //实际项目中,终点应该由后台控制并判断一等奖二等奖等信息

        this.popup_prize=true;//弹框出现
        return false;
      }

      i++;//计步
      this.location(this.stepNum+1);//前进一步
      this.isActive=true;//跳一下
      document.getElementById("audio").play();//播放音频

      var time=setTimeout(function () {//每隔800前进一步
        this.isActive=false;

        if(this.stepForward<i){
          this.isForward=true;//前进停止
          this.popup_prize=true;//弹框出现
          clearTimeout(time);
        }else {
          setTimeout(function () {this.bounce(i)}.bind(this),20);
        }

      }.bind(this),800)
    },
    location:function (n) {//用户头像定位
      this.stepNum=this.isNum(n);//起始步数必须为正整数
      this.userShow=true;

      var col,row=Math.ceil(this.stepNum/this.prizesLen);//行数
      col= row%2 === 0 ? this.stepNum%7===0 ? 1 : this.prizesLen - this.stepNum%this.prizesLen + 1 :
        this.stepNum%7===0 ? 7 : this.stepNum%this.prizesLen;

      this.userTop=this.stepY*(row-1);//行高 * 行数
      this.userLeft= this.stepX*(col-1);//left：格子宽 * 当前的行的第几格子(偶数行倒着走)

    },
    scrollToTop:function (distance, scrollDuration) {//页面中点平滑滚动到用户头像处
      var spacing=window.scrollY-distance,
        scrollStep = -spacing / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
          spacing>0? window.scrollY >= distance?
            window.scrollBy( 0, scrollStep ):clearInterval(scrollInterval)
            : window.scrollY <= distance?
            window.scrollBy( 0, scrollStep ):clearInterval(scrollInterval);
        },15);
    },
    getTop:function (e,i) {//获得元素的距离页面顶部的高度
      this.userOffseTop+=e.offsetTop;
      if(e.offsetParent){
        e=e.offsetParent;
        this.getTop(e);
      }
    },
    randomNum:function(minNum,maxNum){//获得随机数
      switch(arguments.length){
        case 1:
          return parseInt(Math.random()*minNum+1,10);
          break;
        case 2:
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
          break;
        default:
          return 0;
          break;
      }
    },
    isNum:function (n) {//确保参数为正整数
      if(Math.floor(n) !== n || n <= 0){
        n=Math.floor(n);
        n=n<0?-n:(n===0||isNaN(n))?1:n;
        console.warn("stepNum或stepForward须为正整数。")
      }
      return n;
    }
  },
  created:function () {
    for(var i=0;i<Math.ceil(prize.length/this.prizesLen);i++){//根据提供的奖品画线路
      (function () {//闭包取值，另外因为在地图上偶数行行走时实质上是倒着行走的，所以颠倒奇数行数组
        this.prizes[i]=prize.slice(i*this.prizesLen,i*this.prizesLen+this.prizesLen);
        if(i%2!==0)this.prizes[i]=this.prizes[i].reverse();
      }.bind(this))(i);
    }
  },
  mounted:function () {//挂载结束后获取每步的横向和竖向距离，并显示用户当前的位置
    var elem=document.getElementById("map").firstChild.firstChild;
    this.stepX=elem.clientWidth;
    this.stepY=elem.clientHeight;

    setTimeout(function(){//vue挂载结束后显示用户位置  实际项目中原本为后台返回用户当前的位置成功后，再调用 location(位置)并传参。
      this.location(1);
    }.bind(this),500);
  }
})

//解决移动端音频无法paly()
document.addEventListener('DOMContentLoaded', function () {
  function audioAutoPlay() {
    var audio = document.getElementById('audio');
    audio.load();
    document.addEventListener("WeixinJSBridgeReady", function () {
      audio.load();
    }, false);
  }
  audioAutoPlay();
});

document.addEventListener('touchstart', function () {
  function audioAutoPlay() {
    var audio = document.getElementById('audio');
    if(audio!==null){
      audio.load();
    }
  }
  audioAutoPlay();
});
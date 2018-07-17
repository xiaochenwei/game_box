const gameData = {
  //轮播图
  banner_list: [
    { "pic_url": "../../images/banner1.jpg" },
    { "pic_url": "../../images/banner2.jpg" },
    { "pic_url": "../../images/banner3.jpg" }
  ],
  //新游上线
  new_list: [
    { "name": "河洛群侠传", "pic_url": "../../images/h1.jpg" },
    { "name": "仙剑奇侠传", "pic_url": "../../images/h2.jpg" },
    { "name": "武侠", "pic_url": "../../images/h3.jpg" },
    { "name": "破东荒", "pic_url": "../../images/h4.jpg" }
  ],
  //游戏列表
  game_list: [
    { id: "wxd56c8dba9aa2f67b", src: "../../images/g1.jpg", name: "英雄传说：碧之轨迹", num: 180 },
    { id: "wx7ca4ba970c1ea3d8", src: "../../images/g2.jpg", name: "仙剑奇侠传五前传", num: 200 },
    { id: "wxd56c8dba9aa2f67b", src: "../../images/g3.jpg", name: "仙剑奇侠传四配音版", num: 300 },
    { id: "wxd56c8dba9aa2f67b", src: "../../images/g4.jpg", name: "幻想三国志五", num: 223 },
    { id: "wxd56c8dba9aa2f67b", src: "../../images/g5.jpg", name: "英雄传说：零之轨迹", num: 480 }
  ]
};
module.exports = {
  postList: gameData.game_list,
  bannerList: gameData.banner_list,
  newList: gameData.new_list,
}
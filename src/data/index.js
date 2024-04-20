export function getList(name, domain) {
  // 同时填了名称和方向
  if (name && domain) {
    return [
      `${name}${domain}`,
      `${domain}${name}`,
      `${name}${domain}指南`,
      `${name}${domain}指北`,
      `${name}${domain}指路`,
      `${name}学${domain}`,
      `${name}爱${domain}`,
      `${name}玩${domain}`,
      `${name}聊${domain}`,
      `${name}说${domain}`,
      `${name}思${domain}`,
      `${name}要${domain}`,
      `${name}谈${domain}`,
      `${name}漫谈${domain}`,
      `${name}的${domain}之路`,
      `${name}的${domain}小屋`,
      `${name}的${domain}轮子`,
      `${name}的${domain}笔记`,
      `${name}的${domain}宝典`,
      `${name}的${domain}小抄`,
      `${name}的${domain}教室`,
      `${name}的${domain}前端小窝`,
      `${name}的${domain}后端厨房`,
      `${name}的${domain}切图方案`,
      `${name}的${domain}后端秘籍`
    ]
  }

  // 只填名称
  if (name) {
    return [
      `${name}`,
      `程序员${name}`,
      `开发者${name}`,
      `爱笑的${name}`,
      `不会笑${name}`,
      `我是${name}`,
      `技术宅${name}`,
      `沙雕${name}`,
      `coder${name}`,
      `进击的${name}`,
      `沉默${name}`,
      `拓跋${name}`,
      `切图仔${name}`,
      `${name}翻身`,
      `${name}说`,
      `${name}coding`,
      `${name}聊大厂`,
      `${name}编程`,
      `${name}开发故事`,
      `${name}成长之路`,
      `${name}和他的朋友们`,
      `${name}笔记`,
      `${name}软件`,
      `${name}技术`,
      `${name}有话讲`,
      `${name}说技术`,
      `${name}科技`,
      `${name}网`,
      `${name}菜市场`,
      `${name}大人`,
      `${name}味道`,
      `${name}的练级攻略`,
    ]
  }

  // 只填方向
  if (domain) {
    return [
      `五分钟学${domain}`,
      `纯洁的${domain}`,
      `why${domain}`,
      `智能${domain}`,
      `趣说${domain}`,
      `Hello${domain}`,
      `浅谈${domain}`,
      `每日${domain}`,
      `高性能${domain}开发`,
      `${domain}知音`,
      `${domain}程序员`,
      `${domain}之禅`,
      `${domain}技术宇宙`,
      `${domain}技术漫谈`,
      `${domain}大全`,
      `${domain}大学`,
      `${domain}爱好者`,
      `${domain}建设者`,
      `${domain}布道师`,
      `${domain}技术之家`,
      `${domain}学院`,
      `${domain}学习`,
      `${domain}学习指南`,
      `${domain}学习联盟`,
      `${domain}进阶学习`,
      `${domain}宝箱`,
      `${domain}指北`,
      `${domain}团长`,
      `${domain}之父`,
      `${domain}头条`,
      `${domain}指南`,
      `${domain}秘籍`,
      `${domain}之道`,
      `${domain}印象`,
      `${domain}帮`,
      `${domain}面试现场`,
      `${domain}技术`,
      `${domain}开发技术`,
      `${domain}进阶之路`,
      `${domain}技术栈`,
      `${domain}技术学堂`,
      `${domain}技术专栏`,
      `${domain}技术分享社区`,
      `${domain}社区`,
      `${domain}Guide`,
      `${domain}导航`,
      `${domain}教程`,
      `${domain}随想录`,
      `${domain}技术指南针`,
      `${domain}高性能编程`,
      `${domain}海洋`,
      `${domain}职场进阶`,
      `${domain}码匠`,
      `${domain}最权限`,
      `${domain}巅峰`,
      `${domain}天地`,
      `${domain}书单`,
      `${domain}就该这么学`,
      `${domain}之行`,
      `${domain}梦想家`,
      `${domain}内功修炼`,
      `${domain}迷`,
      `${domain}精选`,
      `${domain}架构师`,
      `${domain}之王`,
      `${domain}有个圈儿`,
      `${domain}内点事`,
      `${domain}工程师`,
      `${domain}兴趣圈`,
      `${domain}从进阶到入院`,
      `${domain}的那些事儿`,
      `${domain}宝典`,
      `${domain}面试官`,
      `${domain}菜市场`,
      `${domain}Hubs`,
      `${domain}Porn`,
      `大${domain}圈`,
    ]
  }
}

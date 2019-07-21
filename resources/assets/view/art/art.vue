<template>
    <div>

        <!-- 悬浮栏区域 -->
        <section class="float-bar top">
            <a class="float-bar-btn back">[返回]</a>
            <label class="float-bar-title">
                <span class="title">我爱上了女友的……</span>
                <span class="progress">第...话 - 1/1</span>
            </label>
            <a class="float-bar-btn home" href="/">[首页]</a>
            <a class="float-bar-btn bookshelf" href="/bookshelf/index">[书架]</a>
            <a class="float-bar-btn more">[更多]</a>
        </section>
        <section class="float-bar-menu top-right hidden">
            <div class="menu-arrow-tag"></div>
            <div class="menu-content">
                <a class="float-bar-menu-btn share">
                    <i class="icon"></i>
                    <span class="text">分享</span>
                </a>
                <a class="float-bar-menu-btn comment-list" href="/comment/index/id/622756">
                    <i class="icon"></i>
                    <span class="text">评论</span>
                </a>
            </div>
        </section>

        <section class="float-bar bottom">
            <a class="float-bar-btn chapter-list" href="/comic/chapterList/id/622756">[目录]</a>
            <a class="float-bar-btn view-mode">[阅读模式]</a>
            <div class="float-bar-btn download">[下载]</div>
            <a class="float-bar-btn prev-chapter">[上一章]</a>
            <a class="float-bar-btn next-chapter">[下一章]</a>
        </section>
        <!-- 漫画图片区域 -->
        <section class="comic-pic-area">
            <!-- 浏览控制按键 - 上一页 -->
            <a class="nav-ctrl-btn prev">点击加载上一章节</a>
            <!-- 章节图片列表loading -->
            <!-- 浏览页新增漫画详情信息 -->
            <div class="comic-pic-detail">
                <div class="comic-pic-container">
                    <img src="picture/c36b92ebcfa643eaabee6e77e5d1ddd3.gif" class="comic-pic-cover" />
                    <div class="comic-pic-mask">
                        <div class="mask">
                            <p class="comic-title">
                                我爱上了女友的……                                                    <span class="tag-type c-r">蔷薇</span>
                                <span class="tag-type c-r">都市</span>
                            </p>
                            <p class="comic-desc">三年前邱子南高中毕业时，曾和朋友们去酒吧玩耍，他乔装打扮，在那一晚偶遇了叫做【柳也】的男人。
                                子南一直对他念念不忘，没想到三年后这个男人成了姐姐的男朋友…</p>
                        </div>
                        <div class="comic-cover-info">
                            <p class="comic-detail">17.8亿<small>人气</small><a href="https://m.ac.qq.com/Chapter/index/id/622756/cid/3" class="go-to-read">看第一话<i class="icon-circle-arrow-right"></i></a></p>
                            <p class="comic-from">该作品来自腾讯动漫<span class="line"></span></p>
                        </div>
                    </div>
                    <div class="comic-chap-title">
                        <p><span class="chap-title">我爱上女友的……</span></p>
                    </div>
                </div>
            </div>
            <!-- APP引导语（分享流程下） -->   <!-- 分享的作品隐藏顶部引导下载bar -->
            <section class="app-guiding shared" style="display: none!important;"
                     data-url-Android="http://m.ac.qq.com/apkSet/qqcomic_android_dm2097.apk"
                     data-url-iOS="https://itunes.apple.com/cn/app/id569387346">
                <a class="app-guiding-download">
                    <img class="app-guiding-img"
                         src="picture/app-guiding.png"/>
                </a>
                <a class="app-guiding-close">X</a>
            </section>

            <!-- 浏览模式提示 -->
            <div class="view-mode-hint"></div>

            <!-- 漫画图片列表插入位置 -->
            <section class="comic-pic-list-all">
                <ul class="comic-pic-list" data-cid="1" data-seq="1" data-has-next="1">

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="1" data-pid="8799" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="613" style="padding-top: 76.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_6ee10715c71033f05c1e9c4e51e4f2c2_8799.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_6ee10715c71033f05c1e9c4e51e4f2c2_8799.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="2" data-pid="8800" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="716" style="padding-top: 89.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_935db82990567115e3e62c07cf6600d9_8800.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_935db82990567115e3e62c07cf6600d9_8800.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="3" data-pid="8801" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="688" style="padding-top: 86%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_f3ba62a19431e36fc831aafc5f15e427_8801.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_f3ba62a19431e36fc831aafc5f15e427_8801.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="4" data-pid="8802" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="628" style="padding-top: 78.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_820ac4b6acdd4e393b37d932c0726e01_8802.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_820ac4b6acdd4e393b37d932c0726e01_8802.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="5" data-pid="8803">
                        <div class="comic-pic-pad" data-width="800" data-height="629" style="padding-top: 78.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_9b3e8e57b7edecefb5145ad63b3256d7_8803.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="6" data-pid="8804">
                        <div class="comic-pic-pad" data-width="800" data-height="617" style="padding-top: 77.125%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_9480248b4710ec65b2987cbd80803cfe_8804.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="7" data-pid="8805">
                        <div class="comic-pic-pad" data-width="800" data-height="700" style="padding-top: 87.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_54488d8e83e03cb361f928d8e0f0a3bf_8805.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="8" data-pid="8806">
                        <div class="comic-pic-pad" data-width="800" data-height="688" style="padding-top: 86%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_6611f7e336eb526e126992fadb060a45_8806.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="9" data-pid="8807" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="664" style="padding-top: 83%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_eab005655dc7afdecf7ac746fae06576_8807.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_eab005655dc7afdecf7ac746fae06576_8807.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="10" data-pid="8808" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="723" style="padding-top: 90.375%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_f3cfb0150cfd53022489851189785b50_8808.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_f3cfb0150cfd53022489851189785b50_8808.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="11" data-pid="8809" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="748" style="padding-top: 93.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_b489ba399fe9da4ed7f61d97e0bd1bc1_8809.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_20_b489ba399fe9da4ed7f61d97e0bd1bc1_8809.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="12" data-pid="8810" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="575" style="padding-top: 71.875%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_2cbf177e59c00f1380c98a51747ad118_8810.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_2cbf177e59c00f1380c98a51747ad118_8810.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="13" data-pid="8811" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="706" style="padding-top: 88.25%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_81737a91446dddb02f47786770c1ad02_8811.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_81737a91446dddb02f47786770c1ad02_8811.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="14" data-pid="8812">
                        <div class="comic-pic-pad" data-width="800" data-height="652" style="padding-top: 81.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_959dc97d01834c953daf97ae5e845ff5_8812.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="15" data-pid="8813">
                        <div class="comic-pic-pad" data-width="800" data-height="675" style="padding-top: 84.375%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_9e4a1e04068d3a3cb6144ad44b61ad23_8813.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="16" data-pid="8814">
                        <div class="comic-pic-pad" data-width="800" data-height="618" style="padding-top: 77.25%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_46508ccd02206306f2cd7beed4ec8fe8_8814.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="17" data-pid="8815">
                        <div class="comic-pic-pad" data-width="800" data-height="676" style="padding-top: 84.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_5f60956a2edfbb653782c32d3917bdd0_8815.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="18" data-pid="8816">
                        <div class="comic-pic-pad" data-width="800" data-height="629" style="padding-top: 78.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_840019d4231a71ad12aad9c8b6bb97b2_8816.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="19" data-pid="8817">
                        <div class="comic-pic-pad" data-width="800" data-height="854" style="padding-top: 106.75%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_5a2cf00b528b9eac09614a41dac6f4a2_8817.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="20" data-pid="8818">
                        <div class="comic-pic-pad" data-width="800" data-height="700" style="padding-top: 87.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_08bc7b65e5a1e26befb59b71023440c1_8818.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="21" data-pid="8819">
                        <div class="comic-pic-pad" data-width="800" data-height="724" style="padding-top: 90.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_e0d2e7194645b8cbb84db11164f9fa1c_8819.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="22" data-pid="8820">
                        <div class="comic-pic-pad" data-width="800" data-height="533" style="padding-top: 66.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_dab4ba9c9fc1eb6e2f92ec21fa6c9dd6_8820.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="23" data-pid="8821">
                        <div class="comic-pic-pad" data-width="800" data-height="629" style="padding-top: 78.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_0837382dbf40ce07c80c5a57112c5413_8821.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="24" data-pid="8822">
                        <div class="comic-pic-pad" data-width="800" data-height="617" style="padding-top: 77.125%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_fd1683b0414297104414e026317e1f21_8822.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="25" data-pid="8823">
                        <div class="comic-pic-pad" data-width="800" data-height="633" style="padding-top: 79.125%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_2425eedf57d7d020306e0bc3a566bfa5_8823.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="26" data-pid="8824">
                        <div class="comic-pic-pad" data-width="800" data-height="589" style="padding-top: 73.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_22cc366f704fa5e0bb66af5342741b48_8824.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-unloaded" data-cid="1" data-index="27" data-pid="8825">
                        <div class="comic-pic-pad" data-width="800" data-height="711" style="padding-top: 88.875%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_4ef5042dc5346b1065d0181793355dca_8825.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="28" data-pid="8826" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="605" style="padding-top: 75.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_80ceecaefbbfdc2aea491113e9d58970_8826.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_80ceecaefbbfdc2aea491113e9d58970_8826.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="29" data-pid="8827" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="629" style="padding-top: 78.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_8f6380ea04be79ff10d21430422ec93b_8827.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_8f6380ea04be79ff10d21430422ec93b_8827.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="30" data-pid="8828" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="605" style="padding-top: 75.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_d0f31d9ffc927dfa340373efe78ca7d1_8828.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_d0f31d9ffc927dfa340373efe78ca7d1_8828.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="31" data-pid="8829" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="676" style="padding-top: 84.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_adff5e7620339ea94bc74336a84a28f8_8829.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_adff5e7620339ea94bc74336a84a28f8_8829.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="32" data-pid="8830" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="629" style="padding-top: 78.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_f68d64db8105c2d086766704b6393808_8830.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_f68d64db8105c2d086766704b6393808_8830.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="33" data-pid="8831" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="712" style="padding-top: 89%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_1c63fe143e9abc7e04c54c1ba19d65de_8831.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_1c63fe143e9abc7e04c54c1ba19d65de_8831.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="34" data-pid="8832" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="664" style="padding-top: 83%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_75be8f7bbd151659046852662858716d_8832.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_75be8f7bbd151659046852662858716d_8832.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="35" data-pid="8833" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="676" style="padding-top: 84.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_68472a5d050a2ea1fbac6b0966ad7ae5_8833.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_68472a5d050a2ea1fbac6b0966ad7ae5_8833.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="36" data-pid="8834" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="747" style="padding-top: 93.375%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_db38ea1fdf1c6c13d6d6d30b4ca0b26d_8834.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_db38ea1fdf1c6c13d6d6d30b4ca0b26d_8834.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="37" data-pid="8835" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="712" style="padding-top: 89%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_7939f2d95a318827ea67265c02511b59_8835.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_7939f2d95a318827ea67265c02511b59_8835.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="38" data-pid="8836" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="700" style="padding-top: 87.5%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_e063337123a5db40be885e4d093c7a0e_8836.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_e063337123a5db40be885e4d093c7a0e_8836.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="39" data-pid="8837" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="605" style="padding-top: 75.625%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_401cb5e9934245fb3216722603f247a6_8837.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_401cb5e9934245fb3216722603f247a6_8837.jpg/800">
                        </div>
                        <!---->
                    </li>

                    <li class="comic-pic-item pic-loaded" data-cid="1" data-index="40" data-pid="8838" data-timeout="">
                        <div class="comic-pic-pad" data-width="800" data-height="498" style="padding-top: 62.25%;"></div>
                        <div class="comic-pic-box">
                            <img class="comic-pic" data-src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_09ace138b34e540db2b628bc1e495ef3_1524482472612.jpg/800" src="https://manhua.qpic.cn/manhua_detail/0/23_19_21_09ace138b34e540db2b628bc1e495ef3_1524482472612.jpg/800">
                        </div>
                        <!---->
                        <!--&lt;!&ndash; APP引导语 &ndash;&gt;-->
                        <!--<section class="app-guiding"-->
                        <!--data-url-Android="http://m.ac.qq.com/apkSet/qqcomic_android_dm2097.apk"-->
                        <!--data-url-iOS="https://itunes.apple.com/cn/app/id569387346">-->
                        <!--<a class="app-guiding-download">-->
                        <!--<img class="app-guiding-img"-->
                        <!--src="//gtimg.ac.qq.com/h5/chapter/images/app-guiding.png?v=ddf02aae96d77d94"/>-->
                        <!--</a>-->
                        <!--<a class="app-guiding-close">X</a>-->
                        <!--</section>-->
                        <!---->
                    </li>

                </ul>
            </section>
            <!-- 浏览控制按键 - 下一页 -->
            <a class="nav-ctrl-btn next">点击加载下一章节</a>
            <!-- 结束信息区域 -->
            <section class="end-chapter-ads"></section>
        </section>
        <!-- 最新一话时的弹层 -->
        <div class="down-guide" style="display: none;">
            <div class='down-app-mask'>
                <div class='download'>
                    <a href='javascript:;' class='close-btn'></a>
                    <div class="go-read-comic">

                    </div>
                </div>
            </div>
        </div>

        <!-- 进度框 -->
        <div class="progress-box"></div>
    </div>
</template>

<script>
    import './art.scss';
//    import {getAdverts, getIndexComic} from '@/api/index';

    export default {
        name: 'Art',
        components: {
        },
        data() {
            return {
            }
        },
        mounted() {
            console.log(this.$route);
        },
        methods: {
        }
    }
</script>

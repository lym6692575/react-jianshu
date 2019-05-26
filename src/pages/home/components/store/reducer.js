import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    page:1,
    totalPage:1,

    topicList: [
    {
        id: 1,
        title: '社会热点',
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
        id: 2,
        title: '手绘',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
    ],
    articleList: [{
        id: 1,
        title: '万水千山走遍，女作家三毛罕见的9张照片！',
        desc: '三毛大家都很熟悉，一个极其平凡的女子，骨子里却透露着一般人没有的品质；她是追求自由和爱情的单纯写者，无论是做人还是写作，她笔调自然轻快，不经...',
        imgUrl: '//upload-images.jianshu.io/upload_images/15705790-77ddc28f1a18d385?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },{
        id: 2,
        title: '万水千山走遍，女作家三毛罕见的9张照片！',
        desc: '三毛大家都很熟悉，一个极其平凡的女子，骨子里却透露着一般人没有的品质；她是追求自由和爱情的单纯写者，无论是做人还是写作，她笔调自然轻快，不经...',
        imgUrl: '//upload-images.jianshu.io/upload_images/15705790-77ddc28f1a18d385?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },{
        id: 3,
        title: '万水千山走遍，女作家三毛罕见的9张照片！',
        desc: '三毛大家都很熟悉，一个极其平凡的女子，骨子里却透露着一般人没有的品质；她是追求自由和爱情的单纯写者，无论是做人还是写作，她笔调自然轻快，不经...',
        imgUrl: '//upload-images.jianshu.io/upload_images/15705790-77ddc28f1a18d385?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },{
        id: 4,
        title: '万水千山走遍，女作家三毛罕见的9张照片！',
        desc: '三毛大家都很熟悉，一个极其平凡的女子，骨子里却透露着一般人没有的品质；她是追求自由和爱情的单纯写者，无论是做人还是写作，她笔调自然轻快，不经...',
        imgUrl: '//upload-images.jianshu.io/upload_images/15705790-77ddc28f1a18d385?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }],
    RecommendList:[
    {
        id: 1,
        title: '简书会员',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
        id: 2,
        title: '优选连载',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
        id: 3,
        title: '简书版权',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
        id: 4,
        title: '简书大学堂',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },
    ],
    WriterItem:[
    {
        id: 1,
        WriterName: '茶点故事',
        WriterWordNub: '286.9k',
        WriterLiked: '9.4k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 2,
        WriterName: '无限猴子',
        WriterWordNub: '356k',
        WriterLiked: '1.9k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 3,
        WriterName: '茶点故事',
        WriterWordNub: '286.9k',
        WriterLiked: '9.4k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 4,
        WriterName: '无限猴子',
        WriterWordNub: '356k',
        WriterLiked: '1.9k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 5,
        WriterName: '茶点故事',
        WriterWordNub: '286.9k',
        WriterLiked: '9.4k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 6,
        WriterName: '无限猴子',
        WriterWordNub: '356k',
        WriterLiked: '1.9k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 7,
        WriterName: '茶点故事',
        WriterWordNub: '286.9k',
        WriterLiked: '9.4k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 8,
        WriterName: '无限猴子',
        WriterWordNub: '356k',
        WriterLiked: '1.9k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 9,
        WriterName: '茶点故事',
        WriterWordNub: '286.9k',
        WriterLiked: '9.4k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 10,
        WriterName: '无限猴子',
        WriterWordNub: '356k',
        WriterLiked: '1.9k',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
]
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_WRITER_PAGE:
            console.log('1');
            return ('page',action.page);
        default:
                return state;
    }
}
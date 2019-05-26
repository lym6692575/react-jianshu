import styled from 'styled-components';

export const Homewrapper =styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const Homeleft =styled.div`
    float: left;
    margin-left: 15px;
    padding-top 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 240px;
    }
`;

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`;

export const TopicWrapper =  styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem =  styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size : 12px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        border-radius: 10px;
    }
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        displat: block;
        width: 125px;
        height: 100px;
        float: right:
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin-bottom: 5px;
    }
    .desc{
        line-height: 24px;
        font-size: 13px
        color: #999;
    }
`
export const RecommendWapper =  styled.div`
    padding: 30px 0 10px 0;
`;

export const RecommendList = styled.div`
    display: block;
    float: right:
    width: 280px;
    height: 50px;
    margin-bottom: 13px;
    font-size: 18px
    font-weight: 600;
    background: #ddd;
    border-radius: 2px;
    color: #666;
    line-height: 50px;
    padding-left: 40px;
`

export const WriterWapper =  styled.div`
    margin-top:20px;
    padding: 20px 0 10px 0;
`;
export const WriterHeader =  styled.div`
    overflow: hidden;
    margin-top:10px;
    .intro {
        float: left;
        font-weight: 600;
        color: #666;
        font-size: 15px;
    }
`;

export const WriteInfoSwitch = styled.span`
    float: right;
    color: #666;
    font-weight: 600;
    font-size: 14px;
    .spin {
        display: block;
        float: left;
        font-size: 15px;
        margin-right: 4px;
        transition: all .2s ease-in;
        transform-origin: center center;
}
`

export const WriterList = styled.div`
    margin-top: 10px;
`
export const WriteLi= styled.li`
    margin: 15px 0;
    overflow: hidden;
    color: #333;
    font-weight: 600;
    font-size: 14px;
    .WriterProfilePhoto {
        float: left;
        border-radius: 50%;
        width: 47px;
        height: 47px;
        background: #ddd;
        margin-right: 10px;
        border-bottom: 1px solid #dcdcdc;
    }
    .list {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
    }
    .right {
        margin-top: 5px;
        float: right;
        font-size: 13px;
        color: #42c02e;
    }
    .liked {
        margin-top: 5px;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
        font-weight: 400;
    }
`

export const Writeliked = styled.div`
    margin-top: 20px;
`
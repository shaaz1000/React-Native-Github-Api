import React from "react"
import {SafeAreaView, Text,View,StyleSheet,Image, Touchable, TouchableOpacity, FlatList} from "react-native"
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen"
import commonStyle from "../utilities/commonStyle"
const UserProfileScreen = ({navigation}) => {
    const Data = [
        {
            id:1,
            name: 'awesome-nextjs',
            html_url : "https://github.com/tokuda109/awesome-nextjs",
            description : "notebook_with_decorative_cover: :books: A curated list of awesome resources : books, videos, articles about using Next.js (A minimalistic framework for universal server-rendered React applications) ",
            created_at: "2019-04-15T04:16:08Z",
            updated_at: "2019-12-28T05:40:18Z",
        },
        {
            id:2,
            name: 'awesome-nextjs',
            html_url : "https://github.com/tokuda109/awesome-nextjs",
            description : "notebook_with_decorative_cover: :books: A curated list of awesome resources : books, videos, articles about using Next.js (A minimalistic framework for universal server-rendered React applications) ",
            created_at: "2019-04-15T04:16:08Z",
            updated_at: "2019-12-28T05:40:18Z",
        },
        {
            id:3,
            name: 'awesome-nextjs',
            html_url : "https://github.com/tokuda109/awesome-nextjs",
            description : "notebook_with_decorative_cover: :books: A curated list of awesome resources : books, videos, articles about using Next.js (A minimalistic framework for universal server-rendered React applications) ",
            created_at: "2019-04-15T04:16:08Z",
            updated_at: "2019-12-28T05:40:18Z",
        },
        {
            id:4,
            name: 'awesome-nextjs',
            html_url : "https://github.com/tokuda109/awesome-nextjs",
            description : "notebook_with_decorative_cover: :books: A curated list of awesome resources : books, videos, articles about using Next.js (A minimalistic framework for universal server-rendered React applications) ",
            created_at: "2019-04-15T04:16:08Z",
            updated_at: "2019-12-28T05:40:18Z",
        },
        {
            id:5,
            name: 'awesome-nextjs',
            html_url : "https://github.com/tokuda109/awesome-nextjs",
            description : "notebook_with_decorative_cover: :books: A curated list of awesome resources : books, videos, articles about using Next.js (A minimalistic framework for universal server-rendered React applications) ",
            created_at: "2019-04-15T04:16:08Z",
            updated_at: "2019-12-28T05:40:18Z",
        },
    ]

    const renderRepoItem = (item) => {
        return(
            <>
                <View style={style.repoListContentStyle}>
                    <Text style={[style.repoTextStyle,{color:"white",fontSize:hp("2.3%"),padding:hp("2%")}]}>Repo Name - {item.name}</Text>
                    <Text style={[style.repoTextStyle,{color:"#c6ffc1",fontSize:hp("2.3%"),alignSelf:"center"}]}>Created At {item.created_at}</Text>
                    <Text style={[style.repoTextStyle,{color:"#c6ffc1",fontSize:hp("2.3%"),marginTop:hp("2%"),alignSelf:"center"}]}>Updated At {item.updated_at}</Text>
                    <TouchableOpacity style={{
                            marginVertical:hp("5%"),
                            alignSelf:"center",
                            backgroundColor:"#fffbdf",
                            borderRadius:10,
                        }}>
                        <Text
                            style={{padding:hp("2%")}}
                        >View Profile</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
    return(
        <>
            <SafeAreaView style={commonStyle.screenBackgroundStyle}>
                <View style={style.contentStyle}>
                    <View style={style.profileRowViewDetails}>
                        <Image 
                            style={style.profileImageStyle}
                            source={{uri : "https://avatars.githubusercontent.com/u/56406718?v=4"}}
                        />
                        <View>
                            <Text style={style.listTextStyle}> Name : Shaaz Khan</Text>
                            <Text style={style.listTextStyle}> User Name : Shaaz1000</Text>
                            <View style={[style.profileRowViewDetails,{marginTop:hp("5%"),}]}>
                                <Text style={[style.profileDetailsTextStyle,{color:"#e1701a"}]}>15</Text>
                                <Text style={[style.profileDetailsTextStyle,{color:"#e1701a"}]}>29</Text>
                                <Text style={[style.profileDetailsTextStyle,{color:"#e1701a"}]}>100</Text>
                            </View>
                            <View style={style.profileRowViewDetails}>
                                <Text style={style.profileDetailsTextStyle}>Repos</Text>
                                <Text style={style.profileDetailsTextStyle}>Followers</Text>
                                <Text style={style.profileDetailsTextStyle}>Followings</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={style.buttonStyle}>
                        <Text style={style.buttonTextStyle}>View Profile</Text>
                    </TouchableOpacity>
                    <Text style={style.repoTextStyle}>Repos List</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={Data}
                        renderItem={({item})=>{
                            return renderRepoItem(item)
                        }}
                        keyExtractor={({id})=>id}
                    />
                    <Text style={style.repoTextStyle}>Gist List</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={Data}
                        renderItem={({item})=>{
                            return renderRepoItem(item)
                        }}
                        keyExtractor={({id})=>id}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    contentStyle:{
        backgroundColor:"#fffbdf",
        flex:1
        //marginHorizontal:wp("7%"),
        //marginVertical:wp("7%")
    },
    profileRowViewDetails:{
        flexDirection:"row",
        
        justifyContent:"space-around"
    },
    profileImageStyle:{
        height:100,
        width:100,
        borderRadius:50,
        marginHorizontal:wp("2%"),
        marginVertical:hp("2%")
    },
    listTextStyle:{
        top:hp("3%"),
        color:"#34656d",
        fontSize:hp("2.5%")
    },
    listInnerViewStyle:{
        marginTop:hp("2%"),
    },
    profileDetailsTextStyle:{
        fontSize:hp("2%"),
        fontWeight:"900",
        color:"#344fa1"
    },
    buttonStyle:{
        backgroundColor:"#344fa1",
        borderRadius:10,
        width:wp("70%"),
        padding:hp("2%"),
       marginVertical:hp("2%"),
        alignSelf:"center",
    },
    buttonTextStyle:{
        fontSize:hp("3%"),
        color:"white",
        alignSelf:"center",
    },
    repoTextStyle:{
        fontSize:hp("3.2%"),
        marginHorizontal:wp("5%"),
        color:"#e1701a",
        fontWeight:"bold"
    },
    repoListContentStyle:{
        backgroundColor:"#34656d",
        borderRadius:10,
        marginHorizontal:wp("3%"),
        marginVertical:hp("5"),
        //width:wp("45%"),
        marginBottom:hp("25%")
        //width:wp("90%")
    }
})

export default UserProfileScreen
// import { db } from '~/utils/firebase';
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
// import { useAuth } from '~/hooks/useAuth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// export default function BloodDonorListScreen() {

//     const [donors, setDonors] = useState([])
//     const [requests, setRequests] = useState([])

//     useEffect(() => {
//         getDonors()
//         getRequests()
//     }, [])

//     const handleUser = async() => {
//         const user = await AsyncStorage.getItem('info')
//         console.log("🚀 ~ useEffect ~ user:", user)
//     }

//     useEffect(()=>{
//         handleUser()
//     },[])  

//     const getDonors = () => {
//         getDocs(collection(db, "donors"))
//             .then((querySnapshot) => {
//                 const donors = [];
//                 querySnapshot.forEach((doc) => {
//                     donors.push(doc.data());
//                 });
//                 setDonors(donors);
//             })
//             .catch((error) => {
//                 console.log("Error getting documents: ", error);
//             })
//     }

//     const getRequests = () => {
//         getDocs(collection(db, "requests"))
//             .then((querySnapshot) => {
//                 const requests = [];
//                 querySnapshot.forEach((doc) => {
//                     requests.push(doc.data());
//                 });
//                 setRequests(requests);
//             })
//             .catch((error) => {
//                 console.log("Error getting documents: ", error);
//             })
//     }

//     const renderDonorCard = ({ item }) => (
//         <View style={styles.card}>
//             <Text style={styles.name}>Donor Name:{item.name}</Text>
//             <Text style={styles.bloodGroup}>Blood Group: {item.bloodGroup}</Text>
//             <Text style={styles.age}>Age: {item.age}</Text>
//             <Text style={styles.lastDonation}>Last Donation: {item.lastDonation}</Text>
//             <TouchableOpacity style={styles.contactButton}>
//                 <Text style={styles.contactButtonText}>Contact</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     const renderRequestsCard = ({ item }) => (
//         <TouchableOpacity style={styles.card}>
//             <Text style={styles.name}>Patient Name: {item.patientName}</Text>
//             <Text style={styles.bloodGroup}>Blood Group: {item.bloodGroup}</Text>
//             <Text style={styles.age}>Age: {item.age}</Text>
//             <Text style={styles.lastDonation}>Hospital Name: {item.hospitalName}</Text>
//             <TouchableOpacity style={styles.contactButton}>
//                 <Text style={styles.contactButtonText}>Donate</Text>
//             </TouchableOpacity>
//         </TouchableOpacity>
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.header}>Blood Donors</Text>
//             <FlatList
//                 data={donors}
//                 renderItem={renderDonorCard}
//                 keyExtractor={(item) => item.id}
//                 contentContainerStyle={styles.listContent}
//             />

//             {/* Blood Requests */}
//             <Text style={styles.header}>Blood Requests</Text>
//             <FlatList
//                 data={requests}
//                 renderItem={renderRequestsCard}
//                 keyExtractor={(item) => item.id}
//                 contentContainerStyle={styles.listContent}
//             />
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFF5F5',
//         padding: 16,
//     },
//     header: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#D32F2F',
//         textAlign: 'center',
//         marginVertical: 20,
//     },
//     listContent: {
//         paddingBottom: 16,
//     },
//     card: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 10,
//         padding: 16,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 5,
//         borderLeftWidth: 5,
//         borderLeftColor: '#D32F2F',
//     },
//     name: {
//         fontSize: 20,
//         color: 'black',
//         // marginBottom: 5,
//         fontWeight: 'bold',
//     },
//     bloodGroup: {
//         fontSize: 16,
//         color: '#757575',
//         marginTop: 5,
//     },
//     age: {
//         fontSize: 16,
//         color: '#757575',
//         marginTop: 5,
//     },
//     lastDonation: {
//         fontSize: 16,
//         color: '#757575',
//         marginTop: 5,
//     },
//     contactButton: {
//         marginTop: 10,
//         backgroundColor: '#E53935',
//         paddingVertical: 8,
//         borderRadius: 8,
//     },
//     contactButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
// });





import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample menu data
const menuItems = [
    { id: '1', name: 'Burger', description: 'Delicious beef patty with cheese', price: 5.99, image: 'data:image/jpeg;base64,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' },
    { id: '2', name: 'Pizza', description: 'Cheese pizza with pepperoni', price: 7.99, image: 'https://cdn.uengage.io/uploads/5910/image-312385-1715926538.jpeg' },
    { id: '3', name: 'Pasta', description: 'Spaghetti with marinara sauce', price: 6.49, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqFpqHhlhgK5YOJLzHErowJkYQBPTOVD8sYUz1s0w17qVz5D6LJWKwG92sZJ_RAVA-XQ&usqp=CAU' },
    { id: '4', name: 'Salad', description: 'Fresh green salad with vinaigrette', price: 4.49, image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Greek-Salad_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1383814482359.webp' },
];

const RestaurantApp = () => {
    return (
        <View style={styles.container}>

             {/* Header */}
            <ImageBackground
                source={{ uri: 'https://m.media-amazon.com/images/I/71pbYnWC7kL.jpg' }}
                style={styles.background}
            >

                {/* <View style={styles.header}> */}
                    <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back')}>
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>MST BUilder</Text>
                    <TouchableOpacity style={styles.cartButton} onPress={() => console.log('Go to Cart')}>
                        <Ionicons name="cart" size={24} color="#fff" />
                    </TouchableOpacity>
                {/* </View> */}
            </ImageBackground>

            {/* Menu Screen */}
            <ScrollView style={styles.menuContainer}>
                <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                        <View style={styles.menuItem}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: item.image }} style={styles.menuItemImage} />
                            </View>
                            <View style={styles.menuItemInfo}>
                                <Text style={styles.menuItemName}>{item.name}</Text>
                                <Text style={styles.menuItemDescription}>{item.description}</Text>
                                <Text style={styles.menuItemPrice}>${item.price}</Text>
                                <TouchableOpacity style={styles.addButton} onPress={() => console.log('Item Added')}>
                                    <Text style={styles.addButtonText}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navButton} onPress={() => console.log('Home')}>
                    <Ionicons name="home" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => console.log('Menu')}>
                    <Ionicons name="fast-food" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => console.log('Cart')}>
                    <Ionicons name="cart" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => console.log('Profile')}>
                    <Ionicons name="person" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262422',
    },
    header: {
        height: 60,
        backgroundColor: '#6d6868',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    backButton: {
        padding: 5,
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    cartButton: {
        padding: 5,
    },
    menuContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: '#262422',
    },
    menuItem: {
        flexDirection: 'row',
        backgroundColor: '#343434',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: 'black',
        // shadowOffset:{
        //     width:0,
        //     height:3,
        // },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    imageContainer: {
        // backgroundColor:'red',
        // padding:10,
        // paddingBottom:0
        // flex:1, 
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 13,
    },
    menuItemImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        padding: 20,
    },
    menuItemInfo: {
        padding: 10,
        flex: 1,
    },
    menuItemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white'
    },
    menuItemDescription: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5,
    },
    menuItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    addButton: {
        backgroundColor: '#ed631a',
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    bottomNav: {
        height: 60,
        backgroundColor: '#6200ea',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButton: {
        padding: 10,
    },
    background: {
        width: '100%',
        height: 250,
        // height: 60,
        // backgroundColor: '#6d6868',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
});

export default RestaurantApp;


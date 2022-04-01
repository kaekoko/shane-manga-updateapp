import React,{useState} from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native'
import Carousel, { Pagination, } from 'react-native-snap-carousel'
import useAllGenre from '../hook/AllGenresHook'
import MangaByGenre from './MangaByGenre'


const GenreTab = () => {
    const [genre, setGenre] = useState('adult');
    const { data, isLoading, isSuccess } = useAllGenre();
    //console.log(data)
const onPressGenerName = (slug) => {
     //Alert.alert(slug);
        setGenre(slug)
    };

    return (
        <View>

            {isLoading && (
                <React.Fragment>
                    <Text>Loading...</Text>
                </React.Fragment>
            )}

            {isSuccess && (
                <View>
                    <Text style={styles.title} > ALL GENRES </Text>
                    <FlatList
                        data={data}
                        horizontal={true}
                        keyExtractor={item => `genre_${item.term_id}`}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => onPressGenerName(item.slug)}
                                style={styles.genrebtn}
                            >
                                <View style={styles.item}>
                                    <Text style={styles.btntitle}>
                                      {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                     <MangaByGenre slug={genre} />
                </View>
            )}
        </View>
    );

}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign:'center',
        margin: 10,
    },
    genrebtn : {
        backgroundColor:"red",
        margin:3,
        borderRadius:5,   

    },
    btntitle : {
        padding:2,

    }
});

export default GenreTab

import React from 'react'
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native'
import Carousel, { Pagination, } from 'react-native-snap-carousel'
import useAllGenre from '../hook/AllGenresHook'
const Item = ({title}) => (
    <View style={styles.genrebtn}>
    <Button
        title={title}
        color="black"
        backgroundcolor="black"
        onPress={() => Alert.alert('Simple Button pressed')}

    />
    </View>
);

const GenreTab = () => {
    const { data, isLoading, isSuccess } = useAllGenre();
    //console.log(data)
    const renderGenreItem = ({ item }) => (
        <Item title={item.name} />
    );
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
                        renderItem={renderGenreItem}
                        keyExtractor={item => `genre_${item.term_id}`}
                    />
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

    }
});

export default GenreTab

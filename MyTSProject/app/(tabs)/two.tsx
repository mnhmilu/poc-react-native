import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const users = [
  {
    id:1,
    name: "brynn",
    avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
  {
    id:2,
    name: "thot leader",
    avatar:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  },
  {
    id:3,
    name: "jsa",
    avatar: "https://uifaces.co/our-content/donated/bUkmHPKs.jpg",
  },
  {
    id:4,
    name: "talhaconcepts",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id:5,
    name: "andy vitale",
    avatar: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
  },
  {
    id:6,
    name: "katy friedson",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
];

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
  
  return (
    <>
      <ScrollView>
        
        <View style={styles.container}>
        {users.map((user) => (
          <Card key={user.id}>
            <Card.Title>{user.name}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri: user.avatar,
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
                 ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Cards;
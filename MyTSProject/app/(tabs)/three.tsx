import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";
import { useRouter } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons'; 

type AvatarData = {
  image_url: string;
};

const dataList: AvatarData[] = [
  {
    image_url: "https://uifaces.co/our-content/donated/6MWH9Xi_.jpg",
  },
  {
    image_url: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    image_url:
      "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",
  },
  {
    image_url:
      "https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg",
  },
  {
    image_url:
      "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg",
  },
  {
    image_url:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
];

type AvatarComponentProps = {};



const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  const router = useRouter();
  return (
    <>
      <ScrollView>
        <Text style={styles.subHeader}>Settings</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            onPress={() => {
              router.push("/");
            }}
            icon={{ name: "backup", type: "material" }}         
            containerStyle={{ backgroundColor: "#6733b9" }}
          />
          
          <Avatar
            size={64}
            rounded
            icon={{ name: "restore",type: "material"  }}
            containerStyle={{ backgroundColor: "#00a7f7" }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: "help", type: "material" }}
            containerStyle={{ backgroundColor: "#eb1561" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{
              name: "add",
              type: "material",
              color: "#cdde20",
            }}
            containerStyle={{
              borderColor: "grey",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: "details", type: "material", color: "#009688" }}
            containerStyle={{
              borderColor: "grey",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: "backup", type: "material", color: "#ff5606" }}
            containerStyle={{
              borderColor: "grey",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default Avatars;

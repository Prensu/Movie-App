import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { View, Image, ScrollView } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 bg-primary">
            <Image
                source={images.bg}
                className="absolute w-full z-0"
                resizeMode="cover"
            />
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                <Image
                    source={icons.logo}
                    className="w-12 h-10 mt-20 mb-5 mx-auto"
                    resizeMode="contain"
                />
            </ScrollView>
        </View>
    );
}

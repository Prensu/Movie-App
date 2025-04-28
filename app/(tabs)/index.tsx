import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Index() {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-4xl font-bold text-black">Welcome!</Text>

            <Link href="/onboarding">onBoarding</Link>
            <Link href="/movie/avangers">Avengers</Link>
        </View>
    );
}

import {View, Text,Image} from 'react-native';
import {icons} from '@/constants/icons'

const SearchBar = () => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-4 py-2">
            <Image source={icons.search}  className="size-5" resizeMode="contain" tintColor="#A8B5DB"/>
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                className="flex-1 ml-2 text-white"
                placeholderTextColor="#A8B5DB"
            />
        </View>
    )
}
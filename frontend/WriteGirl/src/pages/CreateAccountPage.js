import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../styles/CreateAccountPageStyles.js";

export default function CreateAccountPage() {
    const { register, setValue, reset, control, handleSubmit, formState: { errors } } = useForm ({
        defaultValues: { //setting default values
            firstName: '',
            lastName: ''
        }
    });

    const onSubmit = data => console.log(data);

    return (
        <View>
            <Text style = { styles.label }>First Name</Text>
            <Controller //firstname field
                name = "firstName"
                control = { control }
                rules = {{ required: true, }}
                render = {({ field: {onChange, onBlur, value }}) => (
                    <TextInput
                        style = { styles.input } //add stylesheet later
                        onBlur = {onBlur}
                        onChangeText = { onChange }
                        value = { value }
                    />
                )}
            />

            <Text style = { styles.label }>Last Name</Text>
            <Controller //lastname field
                name = "lastName"
                control = { control }
                rules = {{ required: true, }}
                render = {({ field: {onChange, onBlur, value }}) => (
                    <TextInput
                        style = { styles.input } //add stylesheet later
                        onBlur = {onBlur}
                        onChangeText = { onChange }
                        value = { value }
                    />
                )}
            />          

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />

            {/* ERRORS */}
            { errors.firstName && <Text>This is required.</Text>}

        </View>
    )


}
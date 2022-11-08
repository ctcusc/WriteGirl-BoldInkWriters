import { Text, View, TextInput, Button, Alert, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./CreateAccountPageStyles.js";

export default function CreateAccountPage() {
    const { register, setValue, reset, control, handleSubmit, formState: { errors } } = useForm ({
        defaultValues: { //setting default values
            firstName: '',
            lastName: ''
        }
    });

    const onSubmit = data => console.log(data);

    return (
        <View style = {styles.container}>

            <Text style = {styles.title}>Create an account</Text>

            {/* FIRST NAME FIELD */}
            <Text style = {styles.label}>First Name</Text>
            <Controller
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

            {/* LAST NAME FIELD */}
            <Text style = {styles.label}>Last Name</Text>
            <Controller
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

            {/* BIRTHDAY FIELD */}
            <Text style = {styles.label}>Birthday (MM/DD/YYYY)</Text>
            <Controller
                name = "birthday"
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

            {/* EMAIL FIELD */}
            <Text style = {styles.label}>Email</Text>
            <Controller
                name = "email"
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

            {/* PASSWORD FIELD */}
            <Text style = {styles.label}>Password</Text>
            <Controller
                name = "password"
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

            {/* REPEAT PASSWORD FIELD */}
            <Text style = {styles.label}>Repeat Password</Text>
            <Controller
                name = "repeatpassword"
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

            {/* COUNTRY FIELD */}

            {/* STATE FIELD */}
            <Text style = {styles.label}>State</Text>
            <Controller
                name = "state"
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

            {/* CITY FIELD */}
            <Text style = {styles.label}>City</Text>
            <Controller
                name = "city"
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

            {/* SUBMIT BUTTON */}
            <Pressable style = {styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style = {styles.label}>Create Account</Text>
            </Pressable>

            {/* ERROR MESSAGES */}
            { errors.firstName && <Text>Please enter your first name.</Text> }
            { errors.lastName && <Text>Please enter your last name.</Text> }
            { errors.birthday && <Text>Please enter your birthday.</Text>}
            { errors.email && <Text>Please enter an email.</Text>}
            { errors.password && <Text>Please enter a password.</Text>}
            { errors.repeatpassword && <Text>Please repeat your password.</Text>}

        </View>
    )


}
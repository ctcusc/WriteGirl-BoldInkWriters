import { Text, ScrollView, TextInput, Button, Alert, Pressable, View, KeyboardAvoidingView, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker"
import { useForm, Controller } from "react-hook-form";
import { styles } from "./CreateAccountPageStyles.js";

{/* npm install @hookform/resolvers yup 
    yup documentation: https://github.com/jquense/yup#schemanotoneofarrayofvalues-arrayany-message-string--function */}
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function CreateAccountPage() {
    const schema = yup.object({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
        birthday: yup.date().required().typeError('Enter a valid birthdate in the format: MM/DD/YYY').max(new Date(), "Enter a valid birthdate."),
        email: yup.string().email('Enter a valid email.'),
        password: yup.string().required('Password is required.'),
        repeatpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match.'),
        country: yup.string().required('Enter your country'),
    })

    const { register, setValue, reset, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { //setting default values
            firstName: '',
            lastName: '',
            birthday: '',
            email: '',
            password: '',
            repeatpassword: '',
            country: '',
            state: '',
            city: '',
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView style={styles.container}>

            <Text style={styles.title}>Create an account</Text>

            {/* FIRST NAME FIELD */}
            <Text style={styles.label}>First Name</Text>
            <Controller
                name="firstName"
                control={control}
                rules={{ required: true, }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* LAST NAME FIELD */}
            <Text style={styles.label}>Last Name</Text>
            <Controller
                name="lastName"
                control={control}
                rules={{ required: true, }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* BIRTHDAY FIELD */}
            <Text style={styles.label}>Birthday (MM/DD/YYYY)</Text>
            <Controller
                name="birthday"
                control={control}
                rules={{ required: true, }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* EMAIL FIELD */}
            <Text style={styles.label}>Email</Text>
            <Controller
                name="email"
                control={control}
                rules={{ required: true, }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* PASSWORD FIELD */}
            <Text style={styles.label}>Password</Text>
            <Controller
                name="password"
                control={control}
                rules={{ required: true, }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* REPEAT PASSWORD FIELD */}
            <Text style={styles.label}>Repeat Password</Text>
            <Controller
                name="repeatpassword"
                control={control}
                rules={{ required: true, }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* COUNTRY FIELD */}
            <Text style={styles.label}>Country</Text>
            <Controller
                name="country"
                control={control}
                rules={{ required: true, }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* STATE FIELD */}
            <Text style={styles.label}>State/Province</Text>
            <Controller
                name="state"
                control={control}
                rules={{}}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* CITY FIELD */}
            <Text style={styles.label}>City</Text>
            <Controller
                name="city"
                control={control}
                rules={{}}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input} //add stylesheet later
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            {/* SUBMIT BUTTON */}
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonLabel}>Create Account</Text>
            </Pressable>


            {/* ERROR MESSAGES */}
            {errors.firstName && <Text>{errors.firstName.message}</Text>}
            {errors.lastName && <Text>{errors.lastName.message}</Text>}
            {errors.birthday && <Text>{errors.birthday.message}</Text>}
            {errors.email && <Text>{errors.email.message}</Text>}
            {errors.password && <Text>{errors.password.message}</Text>}
            {errors.repeatpassword && <Text>{errors.repeatpassword.message}</Text>}
            {errors.country && <Text>{errors.country.message}</Text>}

        </ScrollView >
        </KeyboardAvoidingView>


    )


}
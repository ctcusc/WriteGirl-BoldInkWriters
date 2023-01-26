import * as React from "react";
import { Text, Pressable } from "react-native"
import { useToast, Box } from "native-base";

export default function SignUpToast( props ) {

    const toast = useToast();
    const handlePress = () => {
        console.log("TOAsT OPENED")
        toast.show({
            // description: "testing 12",
            status: "error",
            placement: "top",
            render: () => {
                return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                  {/* Hello! Have a nice day */}
                  {this.props.errorMsg}
                </Box>;
            }
        });
    }

    return (
        <Box>
            <Pressable onPress={() => handlePress("hello")}>
                <Text>PRESS ME</Text>
            </Pressable>
        </Box>
    )
}
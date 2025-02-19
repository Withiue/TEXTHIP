// import { useState } from "react"
// import { Modal } from "react-native"

// export default function Page() {
//     const { signIn, setActive, isLoaded } = useSignIn()
    
//     const [showOnboarding, setShowOnboarding] = useState(false)
    
//     useEffect(() => {
//         async function checkFirstLaunch() {
//             const firstLaunchVal = await AsyncStorage.getItem(LocalConfig.IS_ONBOARDED)
//             if (!firstLaunchVal) {
//                 setShowOnboarding(true)
//             }
//         }
//         checkFirstLaunch();
//     }, [])
    
//     async function onFirstLaunchClosed() {
//         await AsyncStorage.setItem(LocalConfig.IS_ONBOARDED, 'true')
//         setShowOnboarding(false)
//     }

//     return (
//         <View>
//             <Modal
//                 animationType="slide"
//                 presentationStyle='fullScreen'
//                 visible={showOnboarding}
//                 onRequestClose={() => setShowOnboarding(false)}>
//                     <Onboarding onClose={onFirstLaunchClosed} />
//             </Modal>
//         </View>
//     )
// }
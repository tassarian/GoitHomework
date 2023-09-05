import "react-native-gesture-handler";
import Navigation from "./Navigation";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const App = () => {
    return (
        <>
            <ActionSheetProvider>
                <Navigation />
            </ActionSheetProvider>
        </>
    );
};

export default App;


import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
} from "react-native";
import { PricingCard, lightColors } from "@rneui/themed";
import { useRouter } from "expo-router";

type PricingCardComponentProps = {};

const Pricing: React.FunctionComponent<PricingCardComponentProps> = () => {
  const router = useRouter();

  return (
    <>
      <ScrollView>
        <PricingCard
          onButtonPress={() => {
            router.push("/modal");
          }}
          color={lightColors.primary}
          title="Total Savings"
          price="100,00.00 BDT"
          info={["Total Accouns 112", "Basic Support", "All Core Features"]}
          button={{ title: "Add Transaction", icon: "add" }}
        />
 
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    margin: 8,
  },
});

export default Pricing;

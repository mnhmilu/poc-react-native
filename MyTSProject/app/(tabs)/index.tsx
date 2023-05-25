import React from 'react';
import { ScrollView } from 'react-native';
import { PricingCard, lightColors } from '@rneui/themed';
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
        info={['Total Accouns 11', 'Basic Support', 'All Core Features']}
        button={{ title: 'Add Transaction', icon: 'add' }}
      />

    </ScrollView>
  </>
);
};

export default Pricing;
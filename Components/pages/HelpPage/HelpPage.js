import React from "react";
import { View, Text } from "react-native";
import styles from "./HelpPage.style";

export default function HelpPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.helpText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ultricies, tellus vehicula efficitur sagittis, arcu massa tincidunt
        risus, et tempus sem erat et tellus. Donec sed feugiat nisl, eu
        fermentum tellus. Pellentesque eleifend augue vitae nisi cursus cursus.
        Nullam lorem ipsum, consectetur ac malesuada in, fringilla nec libero.
        Aliquam tempor augue vel magna ultrices, at lacinia ligula lacinia.
        Etiam lobortis sapien velit, id facilisis felis aliquet ut. Integer
        efficitur risus in mi dapibus malesuada. Morbi facilisis dictum dui, nec
        mattis lorem varius posuere. Fusce sit amet pellentesque sem. In quis
        eros eget ex scelerisque posuere. Cras interdum, velit ut gravida
        hendrerit, tellus mauris eleifend ex, eu varius mauris nulla nec tortor.
        Integer finibus dapibus mollis. Quisque sed risus eget enim hendrerit
        rutrum id a nulla. Duis consequat consequat sem, vitae semper nisl
        malesuada non. Praesent nec faucibus massa, in posuere ante. Duis
        scelerisque faucibus dui, a viverra orci bibendum et. Suspendisse
        porttitor eros ut orci eleifend, eget iaculis elit venenatis. Aliquam
        vel dolor tempus, semper risus et, tempor quam. Ut ullamcorper laoreet
        leo, vitae placerat risus viverra ac. Fusce pharetra, ipsum porta
        iaculis scelerisque, sem ligula dictum dui, blandit ornare nunc tortor
        sit amet eros. Aliquam in condimentum lectus, ac condimentum magna.
        Nullam efficitur arcu vitae nisl malesuada, id scelerisque velit
        tincidunt. Pellentesque non ipsum at quam fringilla faucibus. Ut in leo
        nec mi condimentum tempus vel vel diam. Curabitur egestas felis id
        semper finibus.
      </Text>
    </View>
  );
}

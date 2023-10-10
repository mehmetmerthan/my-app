//import Router from "../Routers/Router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../Styles/PropsStyle";
import GetTags from "../Utils/PostUtils/TagUtils/GetTags";
const UserProps = () => {
  const [selectedStyleTagsText, setSelectedStyleTagsText] = useState("");
  const [selectedInstrumentTagsText, setSelectedInstrumentTagsText] =
    useState("");

  const { styleTags, instrumentTags, setStyleTags, setInstrumentTags } =
    GetTags();

  const handleStyleTagPress = (styleTagId) => {
    const updatedStyleTags = styleTags.map((styleTag) =>
      styleTag.id === styleTagId
        ? { ...styleTag, selected: !styleTag.selected }
        : styleTag
    );
    setStyleTags(updatedStyleTags);
  };

  const handleInstrumentTagPress = (instrumentTagId) => {
    const updatedInstrumentTags = instrumentTags.map((instrumentTag) =>
      instrumentTag.id === instrumentTagId
        ? { ...instrumentTag, selected: !instrumentTag.selected }
        : instrumentTag
    );
    setInstrumentTags(updatedInstrumentTags);
  };

  const handleButtonClick = () => {
    const selectedStyleTags = styleTags.filter((styleTag) => styleTag.selected);
    const selectedInstrumentTags = instrumentTags.filter(
      (instrumentTag) => instrumentTag.selected
    );
    const selectedStyleTagsText = selectedStyleTags
      .map((styleTag) => styleTag.text)
      .join(", ");
    const selectedInstrumentTagsText = selectedInstrumentTags
      .map((instrumentTag) => instrumentTag.text)
      .join(", ");

    setSelectedStyleTagsText(
      `Seçilen Stil Etiketleri: ${selectedStyleTagsText}`
    );
    setSelectedInstrumentTagsText(
      `Seçilen Enstrüman Etiketleri: ${selectedInstrumentTagsText}`
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tagContainer}>
          {styleTags.map((styleTag) => (
            <TouchableOpacity
              key={styleTag.id}
              style={[
                styles.tag,
                { backgroundColor: styleTag.selected ? "blue" : "lightgray" },
              ]}
              onPress={() => handleStyleTagPress(styleTag.id)}
            >
              <Text style={{ color: "white" }}>{styleTag.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tagContainer}>
          {instrumentTags.map((instrumentTag) => (
            <TouchableOpacity
              key={instrumentTag.id}
              style={[
                styles.tag,
                {
                  backgroundColor: instrumentTag.selected
                    ? "green"
                    : "lightgray",
                },
              ]}
              onPress={() => handleInstrumentTagPress(instrumentTag.id)}
            >
              <Text style={{ color: "white" }}>{instrumentTag.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={{ color: "white" }}>Seçilenleri Göster</Text>
      </TouchableOpacity>
      {selectedStyleTagsText !== "" && (
        <Text style={styles.selectedTagsText}>{selectedStyleTagsText}</Text>
      )}
      {selectedInstrumentTagsText !== "" && (
        <Text style={styles.selectedTagsText}>
          {selectedInstrumentTagsText}
        </Text>
      )}
    </View>
  );
}

// function finish() {
//   return <Router />;
// }
export default UserProps;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listStyleTags, listInstrumentTags } from "../graphql/queries";
import { Button } from "react-native";
import Router from "../Routers/Router";
import styles from "./PropsStyle";

const UserProps = () => {
  const [styleTags, setStyleTags] = useState([]);
  const [instrumentTags, setInstrumentTags] = useState([]);
  const [selectedStyleTagsText, setSelectedStyleTagsText] = useState("");
  const [selectedInstrumentTagsText, setSelectedInstrumentTagsText] =
    useState("");

  useEffect(() => {
    async function fetchStyleTags() {
      try {
        const response = await API.graphql(graphqlOperation(listStyleTags));
        const styleTagData = response.data.listStyleTags.items;
        const extractedStyleTags =
          styleTagData.length > 0 ? styleTagData[0].name : [];
        const formattedStyleTags = extractedStyleTags.map((tag, index) => ({
          id: index + 1,
          text: tag,
          selected: false,
        }));
        setStyleTags(formattedStyleTags);
      } catch (error) {
        console.error("Stil etiketleri alma hatası:", error);
      }
    }

    async function fetchInstrumentTags() {
      try {
        const response = await API.graphql(
          graphqlOperation(listInstrumentTags)
        );
        const instrumentTagData = response.data.listInstrumentTags.items;
        const extractedInstrumentTags =
          instrumentTagData.length > 0 ? instrumentTagData[0].name : [];
        const formattedInstrumentTags = extractedInstrumentTags.map(
          (tag, index) => ({
            id: index + 1,
            text: tag,
            selected: false,
          })
        );
        setInstrumentTags(formattedInstrumentTags);
      } catch (error) {
        console.error("Enstrüman etiketleri alma hatası:", error);
      }
    }

    fetchStyleTags();
    fetchInstrumentTags();
  }, []);

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
      <Button title="Finish" onPress={finish} />
    </View>
  );
};
function finish() {
  return <Router />;
}
export default UserProps;

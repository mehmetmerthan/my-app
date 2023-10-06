import { useEffect, useState} from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listStyleTags, listInstrumentTags } from "../../graphql/queries";

export default function GetTags() {
  const [styleTags, setStyleTags] = useState([]);
  const [instrumentTags, setInstrumentTags] = useState([]);

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
      const response = await API.graphql(graphqlOperation(listInstrumentTags));
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
  useEffect(() => {
    fetchStyleTags();
    fetchInstrumentTags();
  }, []);
  return {
    styleTags,
    instrumentTags,
    setStyleTags,
    setInstrumentTags,
  };
}

import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const timetracking = () => {
  const [timetracks, setTimetracks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchmytimes = async () => {
      try {
        const res = await fetch(
          "https://api.blackcandy.io/v1/time-tracking/users/9"
        );
        console.log(res);
        // const data = await res.json();
        // setTimetracks(data);
      } catch (err) {
        console.log("Error fetching data " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchmytimes();
  });
  return (
    <View>
      <Text>timetracking</Text>
    </View>
  );
};

export default timetracking;

const styles = StyleSheet.create({});

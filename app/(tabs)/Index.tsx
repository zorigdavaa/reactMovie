import { MytracksContext } from "@/contexts/MytracksContext";
import { TokenContext } from "@/contexts/TokenContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";

const baseUrl = "https://api.blackcandy.io/v1";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useContext(TokenContext);
  const { mytracks, setMytracks } = useContext(MytracksContext);

  const currentData = mytracks.slice(0, 10);
  useEffect(() => {
    fetchmytimes();
  }, [token]);

  async function fetchmytimes() {
    setLoading(true);
    try {
      const url = baseUrl + "/time-tracking";
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Fetching my times");
      if (res.status === 200) {
        console.log("Fetching ok");
        setMytracks(res.data.time_trackings);
      }
      // const data = await res.json();
      // setTimetracks(data);
    } catch (err) {
      console.log("Error fetching data " + err);
    } finally {
      setLoading(false);
      console.log("Fetching done");
    }
  }
  function ClockIn(): void {
    console.log("Clock IN");

    const url = baseUrl + "/time-tracking/clockin";
    axios
      .request({
        method: "POST",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          Toast.show({
            type: "success",
            text1: "Амжилттай!",
            visibilityTime: 3000,
          });
          fetchmytimes();
        } else {
          Toast.show({
            type: "error",
            text1: "Амжилтгүй!",
            text2: `${response.status}`,
            visibilityTime: 3000,
          });
        }
      })
      .catch(function (error) {
        Toast.show({
          type: "error",
          text1: "Алдаа гарлаа in",
          text2: error.response.data.error,
          visibilityTime: 3000,
        });
      });
  }

  function ClockOut(): void {
    console.log("Clock OUT");
    const url = baseUrl + "/time-tracking/clockout";
    axios
      .request({
        method: "POST",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          Toast.show({
            type: "success",
            text1: "Амжилттай!",
            visibilityTime: 3000,
          });
        }
        fetchmytimes();
      })
      .catch(function (error) {
        Toast.show({
          type: "error",
          text1: "Алдаа гарлаа out",
          text2: error.response.data.error,
          visibilityTime: 3000,
        });
      });
  }

  return (
    <View>
      {/* <Text>{mytracks.length}</Text> */}
      <View className="flex flex-row justify-around m-2">
        <Button title="Эхлэх" onPress={() => ClockIn()} />
        <Button title="Дуусгах" onPress={() => ClockOut()} />
      </View>

      <View className="flex flex-row border border-blue-400 bg-slate-400">
        <Text className="flex-1">Огноо</Text>
        <Text className="flex-1">Ирсэн цаг</Text>
        <Text className="flex-1">Тарсан цаг</Text>
        <Text className="flex-1">Ажилласан цаг</Text>
      </View>
      <FlatList
        data={currentData}
        renderItem={({ item }) => {
          return (
            <View className="flex flex-row border border-blue-400">
              <Text className="flex-1">{item.Date.slice(0, 10)}</Text>
              <Text className="flex-1">{item.ClockIn}</Text>
              <Text className="flex-1">{item.ClockOut}</Text>
              <Text className="flex-1">{item.WorkedHours}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

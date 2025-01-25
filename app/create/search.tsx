import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Image, StyleSheet } from "react-native";
import { searchBooks } from "./aladinApi";

interface BookItem {
  id: string;
  title: string;
  author: string;
  cover: string;
}

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchBooks(query);
      setBooks(results);
    } catch (error) {
      console.error("도서 검색 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="도서 제목을 입력하세요"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      {loading ? (
        <Text>검색 중...</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>

              <Image source={{ uri: item.cover }} style={styles.coverImage} />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bookItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  coverImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    fontSize: 14,
    color: "#555",
  },
});

export default SearchScreen;

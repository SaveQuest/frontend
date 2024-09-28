import React from "react";
import { View, Modal, Text, TouchableOpacity, Image, StyleSheet, Pressable } from "react-native";

const MyRoomItemModal = ({ visible, onClose, product, onSelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalContent}>
          {product && (
            <>
              <Text style={styles.modalTitle}>{product.name}</Text>
              <Image source={{ uri: product.imageUrl }} style={styles.modalImage} />
              {/* <Text style={styles.modalDescription}>
                {product.description || "설명이 없습니다."}
              </Text> */}

              <TouchableOpacity
                style={styles.purchaseButton}
                onPress={() => {
                  onSelect(product);
                  onClose();
                }}
              >
                <Text style={styles.purchaseButtonText}>장착</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  modalDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  purchaseButton: {
    backgroundColor: "#43b319",
    paddingVertical: 10,
    paddingHorizontal: 110,
    borderRadius: 5,
    marginBottom: 10,
  },
  purchaseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyRoomItemModal;

import React from "react";
import { View, Modal, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const CharacterDetail = ({ visible, onClose, product, onSelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {product && (
            <>
              <Text style={styles.modalTitle}>{product.name}</Text>
              <Image source={product.image} style={styles.modalImage} />
              <Text style={styles.modalDescription}>
                {product.description || "캐릭터 설명이 없습니다."}
              </Text>

              {/* 선택 버튼을 눌렀을 때 부모의 onSelect 함수 호출 */}
              <TouchableOpacity
                style={styles.purchaseButton}
                onPress={() => {
                  onSelect(product); // 부모 컴포넌트로 선택한 캐릭터 전달
                  onClose(); // 모달 닫기
                }}
              >
                <Text style={styles.purchaseButtonText}>선택</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>닫기</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
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
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  purchaseButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  purchaseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: "#d9534f",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CharacterDetail;

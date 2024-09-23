import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import SafeIcon from '../components/SafeIcon'; 

const StoreItemDetail = ({ visible, onClose, product }) => {
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
              <Text style={styles.modalTitle}>{product.title}</Text>
              <View style={styles.modalImage} />
              <View style={styles.priceContainer}>
                <SafeIcon style={styles.priceIcon} />
                <Text style={styles.modalPrice}>{product.price}</Text>
              </View>
              <Text style={styles.modalDescription}>{product.description}</Text>
              <TouchableOpacity style={styles.purchaseButton}>
                <Text style={styles.purchaseButtonText}>구매</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#E0E0E0', 
    borderRadius: 8,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  priceIcon: {
    marginRight: 5,
  },
  modalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43b319',
  },
  modalDescription: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  purchaseButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  purchaseButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default StoreItemDetail;

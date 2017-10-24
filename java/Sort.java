import java.util.Arrays;
public class Sort {
  private void bubbleSort(int[] list){
    int length = list.length;
    for (int i = length - 1; i > 0; i--){
      for (int j = 0; j < i; j++){
        if (list[j] > list[j+1]){
          int temp = list[j];
          list[j] = list[j+1];
          list[j+1] = temp;
        }
      }
    }
  }

  private void selectionSort(int[] list){
    int length = list.length;
    int minIndex = 0;
    for (int i = 0; i < length; i++){
      minIndex = i;
      for (int j = i; j < length; j++){
        if (list[minIndex] > list[j]){
          minIndex = j;
        }
      }
      if (minIndex != i){
        int temp = list[minIndex];
        list[minIndex] = list[i];
        list[i] = temp;
      }
    }
  }

  private void insertionSort(int[] list){
    int length = list.length;
    for (int i = 1; i < length; i++){
      int current = list[i];
      int j = i;
      while(j > 0 && list[j - 1] > current){
        list[j] = list[j-1];
        j--;
      }
      list[j] = current;
    }
  }
  
  private void merge(int[] list, int lo, int high){
    int length = list.length;
    if (lo < high){
      int mid = (lo + high) / 2;
      merge(list, lo, mid);
      merge(list, mid+1, high);
      mergeSort(list, lo, mid, high);
    }
  }

  private void mergeSort(int[] list, int lo, int mid, int high){
    int leftLength = mid - lo + 1;
    int rightLength = high - mid;
    
    int[] left = new int[leftLength];
    int[] right = new int[rightLength];

    for (int i = 0; i < leftLength; i++) left[i] = list[lo + i];
    for (int j = 0; j < rightLength; j++) right[j] = list[mid + 1 + j];

    int l = 0, r = 0;
    int k = lo;
    while(l < leftLength && r < rightLength){
      if (left[l] <= right[r]){
        list[k] = left[l];
        l++;
      }
      else {
        list[k] = right[r];
        r++;
      }
      k++;
    }

    while(l < leftLength){
      list[k++] = left[l++];
    }
    while(r < rightLength){
      list[k++] = right[r++];
    }
  }
  private int partition(int[] list, int lo, int high){
    int pivot = list[high];
    int splitIndex = lo;

    for (int i = lo; i < high; i++){
      if (list[i] < pivot){
        int temp = list[i];
        list[i] = list[splitIndex];
        list[splitIndex] = temp;
        splitIndex++;
      }
    }

    int temp = list[splitIndex];
    list[splitIndex] = list[high];
    list[high] = temp;
    return splitIndex;
  }
  private void quickSort(int[] list, int lo, int high){
    if (lo < high){
      int partitionIndex = partition(list, lo, high);
      quickSort(list, lo, partitionIndex - 1);
      quickSort(list, partitionIndex + 1, high);
    }
  }
  private void quickSort(int[]list){
    quickSort(list, 0, list.length - 1);
  }

  public static void main (String[] args){
    System.out.println("bubblesort!");
    int[] list = {10, 5, 30, 21, 15};

    Sort sorter = new Sort();
    sorter.bubbleSort(list);
    
    System.out.println(Arrays.toString(list));
    System.out.println("selectionsort!");
    int[] list2 = {10, 20, 25, 30, 12, 3, 7};
    sorter.selectionSort(list2);
    System.out.println(Arrays.toString(list2));
    int[] list3 = {10,20,25,30,12,3,7};
    System.out.println("insertionSort!");
    sorter.insertionSort(list3);
    System.out.println(Arrays.toString(list3));
    System.out.println("mergeSort!");
    int[] list4 = {10,20,25,30,12,3,7};
    sorter.merge(list4, 0, list4.length-1);
    System.out.println(Arrays.toString(list4));
    int[] list5 = {20, 1220, 10, 33, 7, 65, 4};
    System.out.println("quickSort!");
    sorter.quickSort(list5);
    System.out.println(Arrays.toString(list5));
  }
}
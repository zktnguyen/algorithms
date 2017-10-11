def bubbleSort(arr):
  # Move the maximum value to the end
  # Once maximum value is placed at the end, do it again in the subarray(0, maxIndex-1)
  for i in range(len(arr) - 1, 0, -1):
    for j in range(0, i):
      if (arr[j] > arr[j+1]):
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp

  return arr

#Improvement from bubble sort as it makes only ONE exchange in one pass.
def selectionSort(arr):
  #Select the minimum index, and compare it to the rest of the array to find minimum index.
  #Place it at the front.

  minIndex = 0
  for i in range(0, len(arr)):
    minIndex = i
    for j in range(i, len(arr)):
      if arr[minIndex] > arr[j]:
        minIndex = j
      
    if minIndex != i:
      temp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = temp

  return arr

#Similar to Selection sort
def insertionSort(arr):

  for i in range(1,len(arr)):
    current = arr[i]
    j = i
    while j > 0 and arr[j-1] > current:
      arr[j] = arr[j-1] #Shift the value downwards if the items in sublist are smaller than current value
      j -= 1
    arr[j] = current
  return arr

def mergeSort(left, right):
  mergedArray = []
  leftLength, rightLength = len(left), len(right)
  l, r = 0, 0

  #compare the left and right subarray values, starting at index 0, until one of the subarrays reach the end
  while l < leftLength and r < rightLength:
    if left[l] < right[r]:
      mergedArray.append(left[l])
      l += 1
    else:
      mergeedArray.append(right[r])
      r += 1
  
  #insert all of the left subarray values, then right subarray values if they are still left

  while l < leftLength:
    mergedArray.append(left[l])
    l += 1
  
  while r < rightLength:
    mergedArray.append(right[r])
    r += 1

  #return sorted subarrays
  return mergedArray
  

def merge(arr):
  
  #Split the array down the middle
  length = len(arr)
  if length < 2:
    return arr

  mid = length // 2
  leftArray, rightArray = arr[:mid], arr[mid:]

  #Sort the subarrays
  return mergeSort(merge(leftArray), merge(rightArray))

def partition(arr, left, right):
  pivot = arr[right]
  splitIndex = left
  
  for i in range(left, right):
    if arr[i] < pivot:
      temp = arr[i]
      arr[i] = arr[splitIndex]
      arr[splitIndex] = temp
      splitIndex += 1
  
  temp = arr[splitIndex]
  arr[splitIndex] = arr[right]
  arr[right] = temp
  return splitIndex

def quickSortHelper(arr, left, right):
  if left < right:
    partitionIndex = partition(arr, left, right)

    quickSortHelper(arr, left, partitionIndex - 1)
    quickSortHelper(arr, partitionIndex + 1, right)
  #Choose a pivot
  #find a split point by converging left and right marks -> partition
  #partition the left and right subarrays of the pivot

  return arr

def quickSort(arr):
  return quickSortHelper(arr, 0, len(arr) - 1)

print(quickSort([1, 10, 5, 15, 22, 44, 7, 60, 20]))
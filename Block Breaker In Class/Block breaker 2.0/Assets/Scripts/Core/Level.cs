using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
    [SerializeField] int blocks = 0;
    public int Blocks {
        get {
            return blocks;
        } 
        set {
            blocks = value;
        }
    } 
    
    public void CheckBlockCount() {
        if (blocks <= 0) {
            // do something
        }
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
    [SerializeField] int blocks = 0;
    private GameController gameController;
    private void Start() {
        gameController = FindObjectOfType<GameController>();
    }
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
            gameController.LoadNextLevel();
        }
    }
}

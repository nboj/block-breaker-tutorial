using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour { 
    [SerializeField] int blocks = 0;
    private GameController gameController;
    public int Blocks { get { return blocks; } set { blocks = value; } }
    void Start() {
        gameController = FindObjectOfType<GameController>();
    }
 
    public void CheckBlockCount() {
        if (blocks <= 0) {
            gameController.LoadNextLevel();
        }
    }
}

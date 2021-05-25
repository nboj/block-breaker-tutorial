using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle : MonoBehaviour
{
    [SerializeField] float moveSpeed = 5f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float xposition = Input.GetAxisRaw("Horizontal");
        float yposition = Input.GetAxisRaw("Vertical");
        transform.Translate(new Vector3(xposition, yposition, 0) * Time.deltaTime * moveSpeed);
    }
}   

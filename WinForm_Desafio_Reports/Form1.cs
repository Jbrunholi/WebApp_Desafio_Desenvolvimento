﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WinForm_Desafio_Reports
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            LoadHomePage();
        }

        private void LoadHomePage()
        {
            webBrowser1.Navigate("http://localhost:5001/Home/Index");
        }
    }
}

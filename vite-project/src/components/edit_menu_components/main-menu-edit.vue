<template>
  <div class="main-menu-edit">
    <div class="section">
      <div class="row">
        <div class="col">
          <div class="first box">
            <form>
              <select id="font-size" name="text-size">
                <option value="h1" onclick="f1(this)">Заголовок 1</option>
                <option value="h2" onclick="f2(this)">Заголовок 2</option>
                <option value="h3" onclick="f3(this)">Заголовок 3</option>
                <option value="p" onclick="f4(this)">Параграф</option>
              </select>
            </form>
          </div>
          <div class="second box">
            <button type="button"
                    onclick="f5(this)">
                    <i class="fa-solid fa-bold"></i>
            </button>
            <button type="button"
                    onclick="f6(this)">
                    <i class="fa-solid fa-italic"></i>            
            </button>
            <button type="button"
                    onclick="f7(this)">
                    <i class="fa-solid fa-underline"></i>
            </button>
            <button type="button"
                    onclick="f8(this)">
                    <i class="fa-solid fa-strikethrough"></i>
            </button>
          </div>
          <div class="third box">
            <button type="button"
                    onclick="f9(this)">
                    <i class="fa-solid fa-align-left"></i>
            </button>
            <button type="button"
                    onclick="f10(this)">
                    <i class="fa-solid fa-align-center"></i>
            </button>
            <button type="button"
                    onclick="f11(this)">
                    <i class="fa-solid fa-align-right"></i>
            </button>
            <button type="button"
                    onclick="f12(this)">
                    <i class="fa-solid fa-align-justify"></i>
            </button> 
          </div>
          <div class="fourth box">
            <button type="button"
                    onclick="f13(this)">
                    <i class="fa-solid fa-image"></i>
            </button>
            <button type="button"
                    onclick="f14(this)">
                    <i class="fa-solid fa-video"></i>            
            </button>
            <button class="link" type="button"
                    onclick="f14(this)">
                    <i class="fa-solid fa-link"></i>            
            </button>
            <button type="button"
                    onclick="f15(this)">
                    <i class="fa-solid fa-table"></i>            
            </button>
            <input type="color" onchange="f16(this)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() { 
    return {
    }
  },
  components:{ 

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-menu-edit {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section{
  height: 80px;
  width: 1400px;
  background-color: aqua;

}
.col{
  background-color: #fff;

  
}

.box{
  display: inline-block !important;
  padding: 0 5px;
}

.first{
  border-right: 2px solid #40576d33;
}
.second{
  border-right: 2px solid #40576d33;
  button:hover{
    background-color: #16c8aa86;
  }
  button:focus{
  background-color: #0af1cb;
  color: #000000;
} 
}

.third{
  border-right: 2px solid #40576d33;
  button:hover{
    background-color: #16c8aa86;
  }
  button:focus{
  background-color: #0af1cb;
  color: #000000;
} 

}

.fourth{
  input[type=color]{
  outline: none;
  border: none;
  background-color: #fff;
}
button:hover{
    background-color: #16c8aa86;
  }
  .link.button:focus{
  background-color: #0af1cb;
  color: #000000;
} 

}

select {
  outline: none;
  border: none;
  width: 200px;
  color: #131c35;
  font-size: 24px;
  background-color: #fff;
  padding: 10px 0;
  margin-left: 10px;
}

option:nth-child(1) {
  font-size: 24px; 
}
option:nth-child(2) {
  font-size: 18px; 
}

option:nth-child(3) {
  font-size: 16px; 
}

option:nth-child(4) {
  font-size: 14px; 
}

button{
  border: none;
  color: #131c35;
  font-size: 24px;
  font-weight: 300;
  background: transparent;
  padding: 10px 16px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}





</style>

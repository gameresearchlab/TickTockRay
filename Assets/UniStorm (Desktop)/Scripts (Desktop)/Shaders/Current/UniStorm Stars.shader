Shader "UniStorm/Stars" {
Properties {
	_TintColor ("Tint Color", Color) = (0.5,0.5,0.5,0.5)
	_StarTex1 ("Star Texture 1", 2D) = "white" {}
	_StarTex2 ("Star Texture 2", 2D) = "white" {}
	_InvFade ("Soft Particles Factor", Range(0.01,3.0)) = 1.0
	_LoY ("Opaque Y", Float) = 0
      _HiY ("Transparent Y", Float) = 10
}

Category {
	Tags { "Queue"="Transparent-500" "IgnoreProjector"="True" "RenderType"="Transparent" }
	Blend SrcAlpha One
	ColorMask RGB
	Cull Off Lighting Off ZWrite Off
	
	
	SubShader 
	{
	
		Pass 
		{
		ZTest Less
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_particles
			#pragma multi_compile_fog

			#include "UnityCG.cginc"

			sampler2D _StarTex1;
			sampler2D _StarTex2;
			fixed4 _TintColor;
			half _LoY;
      		half _HiY;
			
			struct appdata_t {
				float4 vertex : POSITION;
				fixed4 color : COLOR;
				float2 texcoord : TEXCOORD0;
			};

			struct v2f {
				float4 vertex : SV_POSITION;
				fixed4 color : COLOR;
				float2 texcoord : TEXCOORD0;
				//UNITY_FOG_COORDS(1)
				#ifdef SOFTPARTICLES_ON
				float4 projPos : TEXCOORD2;
				#endif
			};
			
			float4 _StarTex1_ST;
			float4 _StarTex2_ST;

			v2f vert (appdata_t v)
			{
				v2f o;
				o.vertex = mul(UNITY_MATRIX_MVP, v.vertex);
				#ifdef SOFTPARTICLES_ON
				o.projPos = ComputeScreenPos (o.vertex);
				COMPUTE_EYEDEPTH(o.projPos.z);
				#endif
				o.color = v.color;
				o.texcoord = TRANSFORM_TEX(v.texcoord,_StarTex1);
				//o.texcoord = TRANSFORM_TEX(v.texcoord,_StarTex2);
				//UNITY_TRANSFER_FOG(o,o.vertex);
				
				float4 worldV = mul (_Object2World, v.vertex);
		        o.color.a = 1 - saturate((worldV.y - _LoY) / (_HiY - _LoY)); 
				
				return o;
			}

			sampler2D_float _CameraDepthTexture;
			float _InvFade;
			
			fixed4 frag (v2f i) : SV_Target
			{
				#ifdef SOFTPARTICLES_ON
				float sceneZ = LinearEyeDepth (SAMPLE_DEPTH_TEXTURE_PROJ(_CameraDepthTexture, UNITY_PROJ_COORD(i.projPos)));
				float partZ = i.projPos.z;
				float fade = saturate (_InvFade * (sceneZ-partZ));
				i.color.a *= fade;
				#endif
				
				fixed4 col = 2.0f * i.color * _TintColor * tex2D(_StarTex1, i.texcoord);
				//UNITY_APPLY_FOG_COLOR(i.fogCoord, col, fixed4(0,0,0,0)); // fog towards black due to our blend mode
				return col;
			}
			ENDCG 
		}
		
		Pass 
		{
		ZTest Less
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_particles
			#pragma multi_compile_fog

			#include "UnityCG.cginc"

			sampler2D _StarTex2;
			fixed4 _TintColor;
			half _LoY;
      		half _HiY;
			
			struct appdata_t {
				float4 vertex : POSITION;
				fixed4 color : COLOR;
				float2 texcoord : TEXCOORD0;
			};

			struct v2f {
				float4 vertex : SV_POSITION;
				fixed4 color : COLOR;
				float2 texcoord : TEXCOORD0;
				//UNITY_FOG_COORDS(1)
				#ifdef SOFTPARTICLES_ON
				float4 projPos : TEXCOORD2;
				#endif
			};
			
			float4 _StarTex2_ST;

			v2f vert (appdata_t v)
			{
				v2f o;
				o.vertex = mul(UNITY_MATRIX_MVP, v.vertex);
				#ifdef SOFTPARTICLES_ON
				o.projPos = ComputeScreenPos (o.vertex);
				COMPUTE_EYEDEPTH(o.projPos.z);
				#endif
				o.color = v.color;
				o.texcoord = TRANSFORM_TEX(v.texcoord,_StarTex2);
				//o.texcoord = TRANSFORM_TEX(v.texcoord,_StarTex2);
				//UNITY_TRANSFER_FOG(o,o.vertex);
				
				float4 worldV = mul (_Object2World, v.vertex);
		        o.color.a = 1 - saturate((worldV.y - _LoY) / (_HiY - _LoY)); 
				
				return o;
			}

			sampler2D_float _CameraDepthTexture;
			float _InvFade;
			
			fixed4 frag (v2f i) : SV_Target
			{
				#ifdef SOFTPARTICLES_ON
				float sceneZ = LinearEyeDepth (SAMPLE_DEPTH_TEXTURE_PROJ(_CameraDepthTexture, UNITY_PROJ_COORD(i.projPos)));
				float partZ = i.projPos.z;
				float fade = saturate (_InvFade * (sceneZ-partZ));
				i.color.a *= fade;
				#endif
				
				fixed4 col = 2.0f * i.color * _TintColor * tex2D(_StarTex2, i.texcoord);
				//UNITY_APPLY_FOG_COLOR(i.fogCoord, col, fixed4(0,0,0,0)); // fog towards black due to our blend mode
				return col;
			}
			ENDCG 
		}
	}	
}
}

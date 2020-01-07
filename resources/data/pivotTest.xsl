<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:variable name="box-x" select="string('⊠')"/>
  <xsl:variable name="box-dash" select="string('⊟')"/>
  <xsl:variable name="box-dot" select="string('⊡')"/>
  <xsl:variable name="core-fields" select="string('proficiencyBonus,maxDex,improvedInitiative')"/>
  <xsl:variable name="health-fields" select="string('currentHealth,maxHealth,currentTempHP')"/>
  <xsl:variable name="armor-fields" select="string('armorBonus,shieldBonus,miscArmorBonus,unarmoredDefense')"/>
  <xsl:variable name="speed-fields" select="string('baseSpeed,speedMiscMod')"/>
  <xsl:variable name="spell-fields" select="string('miscSpellAttackBonus,miscSpellDCBonus,castingStatCode')"/>
  <xsl:variable name="coded-fields" select="string('raceCode,subraceCode,backgroundCode,featCode,multiclassFeatures,classResource')"/>
  <xsl:variable name="note-fields" select="string('features,armor-proficiencies,weapon-proficiencies,special-items,languages,equiptment,blank1,classes1,race,background,blank2,blank3,blank4,blank5,blank6,character-name,classes2,code1,code2,code3,code4,code5,code6')"/>
  <xsl:variable name="dice-fields" select="string('number-of,side-count')"/>
  <xsl:variable name="skill-labels" select="string('Athletics,Acrobatics,Sleight Of Hand,Stealth,Arcana,History,Investigation,Nature,Religion,Animal Handling,Insight,Medicine,Perception,Survival,Deception,Intimidation,Performance,Persuasion,ignore')"/>
  <xsl:variable name="skill-fields" select="string('name,proficient,bonus,expertise,flag1,flag2')"/>
  <xsl:variable name="ability-labels" select="string('str,dex,con,int,wis,cha')"/>
  <xsl:variable name="ability-fields" select="string('name,score,save-proficient,bonus')"/>
  <xsl:variable name="spell-slot-labels" select="string('cantrip,1,2,3,4,5,6,7,8,9')"/>
  <xsl:variable name="spell-slot-fields" select="string('level,slot-count,level-available')"/>
  <xsl:variable name="spell-list-fields" select="string('level,name')"/>
  <xsl:variable name="weapon-fields" select="string('name,range,code1,code2,code3,code4,code5,code6,flag1,flag2,damageDice')"/>
  
  <xsl:template match="/">
    <xsl:element name="characters">
      <xsl:for-each select="//character">
        <xsl:call-template name="make-character">
          <xsl:with-param name="character" select="."/>
        </xsl:call-template>
      </xsl:for-each>
    </xsl:element>
  </xsl:template>

  <xsl:template name="make-character">
    <xsl:param name="character"/>
    <xsl:element name="character">
      <xsl:call-template name="attributes">
        <xsl:with-param name="character" select="$character"/>
        <xsl:with-param name="fields" select="$core-fields"/>
      </xsl:call-template>
      <!--
      <xsl:element name="health">
        <xsl:call-template name="attributes">
          <xsl:with-param name="character" select="$character"/>
          <xsl:with-param name="fields" select="$health-fields"/>
        </xsl:call-template>
        <xsl:element name="hit-dice">
          <xsl:call-template name="parse-table">
            <xsl:with-param name="table">
              <xsl:call-template name="counted-partition">
                <xsl:with-param name="list" select="$character/hitDiceList"/>
                <xsl:with-param name="size" select="number(3)"/>
                <xsl:with-param name="delim" select="$box-x"/>
              </xsl:call-template>
            </xsl:with-param>
            <xsl:with-param name="row-delim" select="string(';')"/>
            <xsl:with-param name="delim" select="string(',')"/>
            <xsl:with-param name="row-name" select="string('hit-die')"/>
            <xsl:with-param name="fields" select="$dice-fields"/>
          </xsl:call-template>
        </xsl:element>
      </xsl:element>
      <xsl:element name="armor">
        <xsl:call-template name="attributes">
          <xsl:with-param name="character" select="$character"/>
          <xsl:with-param name="fields" select="$armor-fields"/>
        </xsl:call-template>
      </xsl:element>
      <xsl:element name="speed">
        <xsl:call-template name="attributes">
          <xsl:with-param name="character" select="$character"/>
          <xsl:with-param name="fields" select="$speed-fields"/>
        </xsl:call-template>
      </xsl:element>
      <xsl:element name="coded">
        <xsl:call-template name="attributes">
          <xsl:with-param name="character" select="$character"/>
          <xsl:with-param name="fields" select="$coded-fields"/>
        </xsl:call-template>
      </xsl:element>
      -->
      <xsl:element name="weapons">
        <xsl:call-template name="nested-partition">
          <xsl:with-param name="list" select="$character/weaponList"/>
          <xsl:with-param name="list-delim" select="$box-x"/>
          <xsl:with-param name="field-count" select="number(11)"/>
          <xsl:with-param name="nested-field-count" select="number(2)"/>
        </xsl:call-template>
      </xsl:element>
      <!--
      <xsl:element name="spell-info">
        <xsl:call-template name="attributes">
          <xsl:with-param name="character" select="$character"/>
          <xsl:with-param name="fields" select="$spell-fields"/>
        </xsl:call-template>
        <xsl:element name="spell-slots">
          <xsl:call-template name="parse-table">
            <xsl:with-param name="table">
              <xsl:call-template name="pivot">
                <xsl:with-param name="in">
                  <xsl:variable name="list">
                    <xsl:call-template name="take-n">
                      <xsl:with-param name="list">
                        <xsl:call-template name="replace">
                          <xsl:with-param name="haystack">
                            <xsl:call-template name="replace">
                              <xsl:with-param name="haystack">
                                <xsl:call-template name="select">
                                  <xsl:with-param name="list" select="$character/spellList"/>
                                  <xsl:with-param name="delim" select="$box-x"/>
                                  <xsl:with-param name="indicies" select="string('1,2,3,4,5')"/>
                                </xsl:call-template>
                              </xsl:with-param>
                              <xsl:with-param name="needle" select="concat($box-dot,$box-x)"/>
                              <xsl:with-param name="replacement" select="string(';')"/>
                            </xsl:call-template>
                          </xsl:with-param>
                          <xsl:with-param name="needle" select="$box-dot"/>
                          <xsl:with-param name="replacement" select="string(',')"/>
                        </xsl:call-template>
                      </xsl:with-param>
                      <xsl:with-param name="delim" select="string(';')"/>
                      <xsl:with-param name="n" select="number(4)"/>
                    </xsl:call-template>
                  </xsl:variable>
                  <xsl:value-of select="concat($spell-slot-labels,string(';'),$list)"/>
                </xsl:with-param>
              </xsl:call-template>
            </xsl:with-param>
            <xsl:with-param name="row-delim" select="string(';')"/>
            <xsl:with-param name="delim" select="string(',')"/>
            <xsl:with-param name="row-name" select="string('spell-slot')"/>
            <xsl:with-param name="fields" select="$spell-slot-fields"/>
          </xsl:call-template>
        </xsl:element>
        <xsl:element name="spells">
          <xsl:variable name="spell-table">
            <xsl:call-template name="replace">
              <xsl:with-param name="haystack">
                <xsl:call-template name="replace">
                  <xsl:with-param name="haystack">
                    <xsl:call-template name="select">
                      <xsl:with-param name="list" select="$character/spellList"/>
                      <xsl:with-param name="delim" select="$box-x"/>
                      <xsl:with-param name="indicies" select="string('8')"/>
                    </xsl:call-template>
                  </xsl:with-param>
                  <xsl:with-param name="needle" select="$box-dot"/>
                  <xsl:with-param name="replacement" select="string(';')"/>
                </xsl:call-template>
              </xsl:with-param>
              <xsl:with-param name="needle" select="$box-dash"/>
              <xsl:with-param name="replacement" select="string(',')"/>
            </xsl:call-template>
          </xsl:variable>
          <xsl:call-template name="parse-table">
            <xsl:with-param name="table">
              <xsl:value-of select="$spell-table"/>
            </xsl:with-param>
            <xsl:with-param name="row-delim" select="string(';')"/>
            <xsl:with-param name="delim" select="string(',')"/>
            <xsl:with-param name="row-name" select="string('spell')"/>
            <xsl:with-param name="fields" select="$spell-list-fields"/>
          </xsl:call-template>
        </xsl:element>
      </xsl:element>
      <xsl:element name="abilities">
        <xsl:call-template name="parse-table">
          <xsl:with-param name="table">
            <xsl:call-template name="pivot">
              <xsl:with-param name="in">
                <xsl:call-template name="take-n">
                  <xsl:with-param name="list">
                    <xsl:variable name="list">
                      <xsl:call-template name="partition">
                        <xsl:with-param name="list" select="$character/abilityScores"/>
                        <xsl:with-param name="size" select="number(6)"/>
                        <xsl:with-param name="delim" select="$box-x"/>
                      </xsl:call-template>
                    </xsl:variable>
                    <xsl:value-of select="concat($ability-labels,string(';'),$list)"/>
                  </xsl:with-param>
                  <xsl:with-param name="delim" select="string(';')"/>
                  <xsl:with-param name="n" select="number(4)"/>
                </xsl:call-template>
              </xsl:with-param>
            </xsl:call-template>
          </xsl:with-param>
          <xsl:with-param name="row-delim" select="string(';')"/>
          <xsl:with-param name="delim" select="string(',')"/>
          <xsl:with-param name="row-name" select="string('ability')"/>
          <xsl:with-param name="fields" select="$ability-fields"/>
        </xsl:call-template>
      </xsl:element>
      <xsl:element name="skills">
        <xsl:call-template name="parse-table">
          <xsl:with-param name="table">
            <xsl:call-template name="take-n">
              <xsl:with-param name="list">
                <xsl:call-template name="pivot">
                  <xsl:with-param name="in">
                    <xsl:variable name="list">
                      <xsl:call-template name="partition">
                        <xsl:with-param name="list" select="$character/skillInfo"/>
                        <xsl:with-param name="size" select="number(19)"/>
                        <xsl:with-param name="delim" select="$box-x"/>
                      </xsl:call-template>
                    </xsl:variable>
                    <xsl:value-of select="concat($skill-labels,string(';'),$list)"/>
                  </xsl:with-param>
                </xsl:call-template>
              </xsl:with-param>
              <xsl:with-param name="delim" select="string(';')"/>
              <xsl:with-param name="n" select="number(18)"/>
            </xsl:call-template>
          </xsl:with-param>
          <xsl:with-param name="row-delim" select="string(';')"/>
          <xsl:with-param name="delim" select="string(',')"/>
          <xsl:with-param name="row-name" select="string('skill')"/>
          <xsl:with-param name="fields" select="$skill-fields"/>
        </xsl:call-template>
      </xsl:element>
      -->
    </xsl:element>
  </xsl:template>

  <xsl:template name="attributes">
    <xsl:param name="character"/>
    <xsl:param name="fields"/>
    <xsl:choose>
      <xsl:when test="contains($fields,',')">
        <xsl:variable name="first-field" select="substring-before($fields, ',')"/>
        <xsl:if test="$first-field">
          <xsl:variable name="value" select="$character/node()[name() = $first-field]/text()"/>
          <xsl:attribute name="{$first-field}">
            <xsl:value-of select="$value"/>
          </xsl:attribute>
        </xsl:if>
        <xsl:variable name="remaining-fields" select="substring-after($fields, ',')"/>
        <xsl:if test="$remaining-fields">
          <xsl:call-template name="attributes">
            <xsl:with-param name="character" select="$character"/>
            <xsl:with-param name="fields" select="$remaining-fields"/>
          </xsl:call-template>
        </xsl:if>
      </xsl:when>
      <xsl:otherwise>
        <xsl:variable name="value" select="$character/node()[name() = $fields]/text()"/>
        <xsl:attribute name="{$fields}">
          <xsl:value-of select="$value"/>
        </xsl:attribute>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="parse-list">
    <xsl:param name="fields"/>
    <xsl:param name="list"/>
    <xsl:param name="attrList"/>
    <xsl:param name="delim"/>
    <xsl:choose>
      <xsl:when test="contains($fields,',') and contains($list, $delim)">
        <xsl:variable name="first-field" select="substring-before($fields, ',')"/>
        <xsl:variable name="first-item" select="substring-before($list, $delim)"/>
        <xsl:attribute name="{$first-field}">
          <xsl:value-of select="$first-item"/>
        </xsl:attribute>
        <xsl:call-template name="parse-list">
          <xsl:with-param name="fields" select="substring-after($fields, ',')"/>
          <xsl:with-param name="list" select="substring-after($list, $delim)"/>
          <xsl:with-param name="attrList" select="$attrList"/>
          <xsl:with-param name="delim" select="$delim"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:variable name="field">
          <xsl:choose>
            <xsl:when test="contains($fields,',')">
              <xsl:value-of select="substring-after($fields, ',')"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="$fields"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:variable>
        <xsl:variable name="item">
          <xsl:choose>
            <xsl:when test="contains($list, $delim)">
              <xsl:value-of select="substring-after($list, $delim)"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="$list"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:variable>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="parse-table">
    <xsl:param name="table"/>
    <xsl:param name="row-delim"/>
    <xsl:param name="delim"/>
    <xsl:param name="row-name"/>
    <xsl:param name="fields"/>
    <xsl:variable name="row">
      <xsl:choose>
        <xsl:when test="contains($table,$row-delim)">
          <xsl:value-of select="substring-before($table,$row-delim)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$table"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:if test="$row and string-length($row) > 0">
      <xsl:element name="{$row-name}">
        <xsl:call-template name="parse-row">
          <xsl:with-param name="row" select="$row"/>
          <xsl:with-param name="delim" select="$delim"/>
          <xsl:with-param name="fields" select="$fields"/>
        </xsl:call-template>
      </xsl:element>
    </xsl:if>
    <xsl:if test="contains($table,$row-delim)">
      <xsl:call-template name="parse-table">
        <xsl:with-param name="table" select="substring-after($table,$row-delim)"/>
        <xsl:with-param name="row-delim" select="$row-delim"/>
        <xsl:with-param name="delim" select="$delim"/>
        <xsl:with-param name="row-name" select="$row-name"/>
        <xsl:with-param name="fields" select="$fields"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <xsl:template name="parse-row">
    <xsl:param name="row"/>
    <xsl:param name="delim"/>
    <xsl:param name="fields"/>
    <xsl:choose>
      <xsl:when test="contains($row,$delim) and contains($fields,$delim)">
        <xsl:variable name="cell" select="substring-before($row,$delim)"/>
        <xsl:variable name="field" select="substring-before($fields,$delim)"/>
        <xsl:attribute name="{$field}">
          <xsl:value-of select="$cell"/>
        </xsl:attribute>
        <xsl:call-template name="parse-row">
          <xsl:with-param name="row" select="substring-after($row,$delim)"/>
          <xsl:with-param name="fields" select="substring-after($fields,$delim)"/>
          <xsl:with-param name="delim" select="$delim"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:variable name="cell">
          <xsl:choose>
            <xsl:when test="contains($row,$delim)">
              <xsl:value-of select="substring-before($row,$delim)"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="$row"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:variable>
        <xsl:variable name="field">
          <xsl:choose>
            <xsl:when test="contains($fields,$delim)">
              <xsl:value-of select="substring-before($fields,$delim)"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="$fields"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:variable>
        <xsl:attribute name="{$field}">
          <xsl:value-of select="$cell"/>
        </xsl:attribute>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="pivot">
    <xsl:param name="in"/>
    <xsl:param name="delim" select="string(',')"/>
    <xsl:param name="row-delim" select="string(';')"/>
    <xsl:param name="temp-row" select="string('')"/>
    <xsl:param name="temp-table" select="string('')"/>
    <xsl:param name="out" select="string('')"/>
    <xsl:choose>
      <xsl:when test="contains($in,$row-delim)">
        <xsl:variable name="next-elem" select="substring-before($in,$delim)"/>
        <xsl:variable name="next-row" select="substring-before($in,$row-delim)"/>
        <xsl:variable name="remaining-elems" select="substring-after($next-row,$delim)"/>
        <xsl:variable name="remaining-rows" select="substring-after($in,$row-delim)"/>
        <xsl:call-template name="pivot">
          <xsl:with-param name="in" select="$remaining-rows"/>
          <xsl:with-param name="temp-row">
            <xsl:variable name="temp-delim">
              <xsl:if test="$temp-row and string-length($temp-row) > 0">
                <xsl:value-of select="$delim"/>
              </xsl:if>
            </xsl:variable>
            <xsl:value-of select="concat($temp-row,$temp-delim,$next-elem)"/>
          </xsl:with-param>
          <xsl:with-param name="temp-table">
            <xsl:variable name="temp-row-delim">
              <xsl:if test="$temp-table and string-length($temp-table) > 0">
                <xsl:value-of select="$row-delim"/>
              </xsl:if>
            </xsl:variable>
            <xsl:value-of select="concat($temp-table,$temp-row-delim,$remaining-elems)"/>
          </xsl:with-param>
          <xsl:with-param name="out" select="$out"/>
          <xsl:with-param name="delim" select="$delim"/>
          <xsl:with-param name="row-delim" select="$row-delim"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:choose>
          <xsl:when test="contains($temp-table,$delim) and contains($temp-table,$row-delim)">
            <xsl:choose>
              <xsl:when test="contains($in,$delim)">
                <xsl:variable name="next-elem" select="substring-before($in,$delim)"/>
                <xsl:variable name="remaining-elems" select="substring-after($in,$delim)"/>
                <xsl:call-template name="pivot">
                  <xsl:with-param name="in" select="concat($temp-table,$row-delim,$remaining-elems)"/>
                  <xsl:with-param name="temp-row">
                    <xsl:value-of select="string('')"/>
                  </xsl:with-param>
                  <xsl:with-param name="temp-table">
                    <xsl:value-of select="string('')"/>
                  </xsl:with-param>
                  <xsl:with-param name="out">
                    <xsl:variable name="temp-row-delim">
                      <xsl:if test="$out and string-length($out) > 0">
                        <xsl:value-of select="$row-delim"/>
                      </xsl:if>
                    </xsl:variable>
                    <xsl:variable name="temp-delim">
                      <xsl:if test="$temp-row and string-length($temp-row) > 0">
                        <xsl:value-of select="$delim"/>
                      </xsl:if>
                    </xsl:variable>
                    <xsl:value-of select="concat($out,$temp-row-delim,$temp-row,$temp-delim,$next-elem)"/>
                  </xsl:with-param>
                  <xsl:with-param name="delim" select="$delim"/>
                  <xsl:with-param name="row-delim" select="$row-delim"/>
                </xsl:call-template>
              </xsl:when>
              <xsl:otherwise>
                <xsl:element name="log">
                  <xsl:attribute name="line">
                    <xsl:value-of select="number(132)"/>
                  </xsl:attribute>
                </xsl:element>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:when>
          <xsl:otherwise>
            <xsl:choose>
              <xsl:when test="contains($temp-table,$row-delim) and not(contains($temp-table,$delim))">
                <xsl:variable name="next-elem" select="substring-before($in,$delim)"/>
                <xsl:variable name="remaining-elem" select="substring-after($in,$delim)"/>
                <xsl:variable name="final-row">
                  <xsl:call-template name="replace">
                    <xsl:with-param name="haystack" select="$temp-table"/>
                    <xsl:with-param name="needle" select="string(';')"/>
                    <xsl:with-param name="replacement" select="string(',')"/>
                  </xsl:call-template>
                </xsl:variable>
                <xsl:variable name="temp-delim-a">
                  <xsl:if test="$temp-row and string-length($temp-row) > 0">
                    <xsl:value-of select="$delim"/>
                  </xsl:if>
                </xsl:variable>
                <xsl:variable name="temp-delim-b">
                  <xsl:if test="$final-row and string-length($final-row) > 0">
                    <xsl:value-of select="$delim"/>
                  </xsl:if>
                </xsl:variable>
                <xsl:variable name="temp-row-delim">
                  <xsl:if test="$out and string-length($out) > 0">
                    <xsl:value-of select="$row-delim"/>
                  </xsl:if>
                </xsl:variable>
                <xsl:value-of select="concat($out,$temp-row-delim,$temp-row,$temp-delim-a,$next-elem,$row-delim,$final-row,$temp-delim-b,$remaining-elem)"/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:element name="log">
                  <xsl:attribute name="line">
                    <xsl:value-of select="number(189)"/>
                  </xsl:attribute>
                </xsl:element>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="nested-partition">
    <xsl:param name="list"/>
    <xsl:param name="list-delim"/>
    <xsl:param name="field-count"/>
    <xsl:param name="delim" select="string(',')"/>
    <xsl:param name="row-delim" select="string(';')"/>
    <xsl:param name="nested-field-count"/>
    <xsl:param name="nested-delim" select="string('_')"/>
    <xsl:call-template name="nested-partition-recurse">
      <xsl:with-param name="list" select="substring-after($list,$list-delim)"/>
      <xsl:with-param name="list-delim" select="$list-delim"/>
      <xsl:with-param name="field-count" select="$field-count"/>
      <xsl:with-param name="delim" select="$delim"/>
      <xsl:with-param name="row-delim" select="$row-delim"/>
      <xsl:with-param name="nested-field-count" select="$nested-field-count"/>
      <xsl:with-param name="nested-delim" select="$nested-delim"/>
      <xsl:with-param name="prev-countdown" select="number($field-count)"/>
      <xsl:with-param name="countdown" select="number($field-count) - 1"/>
      <xsl:with-param name="in-nested" select="false()"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="nested-partition-recurse">
    <xsl:param name="list"/>
    <xsl:param name="list-delim"/>
    <xsl:param name="field-count"/>
    <xsl:param name="delim"/>
    <xsl:param name="row-delim"/>
    <xsl:param name="nested-field-count"/>
    <xsl:param name="nested-delim"/>
    <xsl:param name="prev-countdown"/>
    <xsl:param name="countdown"/>
    <xsl:param name="in-nested"/>
    <xsl:param name="out" select="string('')"/>
    <xsl:variable name="item">
      <xsl:choose>
        <xsl:when test="contains($list,$list-delim)">
          <xsl:value-of select="substring-before($list,$list-delim)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$list"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="temp-delim">
      <xsl:if test="$out and string-length($out) &gt; 0">
        <xsl:value-of select="$delim"/>
      </xsl:if>
    </xsl:variable>
    <xsl:variable name="step">
      <xsl:value-of select="concat($temp-delim,$item)"/>
    </xsl:variable>
    <xsl:element name="log">
      <xsl:attribute name="item"><xsl:value-of select="$item"/></xsl:attribute>
      <xsl:attribute name="number-item"><xsl:value-of select="number($item)"/></xsl:attribute>
      <xsl:attribute name="temp-delim"><xsl:value-of select="$temp-delim"/></xsl:attribute>
      <xsl:attribute name="number-prev-countdown"><xsl:value-of select="number($prev-countdown)"/></xsl:attribute>
      <xsl:attribute name="prev-countdown"><xsl:value-of select="$prev-countdown"/></xsl:attribute>
      <xsl:attribute name="number-countdown"><xsl:value-of select="number($countdown)"/></xsl:attribute>
      <xsl:attribute name="countdown"><xsl:value-of select="$countdown"/></xsl:attribute>
      <xsl:attribute name="bool-in-nested"><xsl:value-of select="boolean($in-nested)"/></xsl:attribute>
      <xsl:attribute name="in-nested"><xsl:value-of select="$in-nested"/></xsl:attribute>
    </xsl:element>
    <xsl:choose>
      <xsl:when test="contains($list,$list-delim)">
        <xsl:call-template name="nested-partition-recurse">
          <xsl:with-param name="list" select="substring-after($list,$list-delim)"/>
          <xsl:with-param name="list-delim" select="$list-delim"/>
          <xsl:with-param name="field-count" select="$field-count"/>
          <xsl:with-param name="delim" select="$delim"/>
          <xsl:with-param name="row-delim" select="$row-delim"/>
          <xsl:with-param name="nested-field-count" select="$nested-field-count"/>
          <xsl:with-param name="nested-delim" select="$nested-delim"/>
          <xsl:with-param name="prev-countdown" select="$countdown"/>
          <xsl:with-param name="countdown">
            <xsl:choose>
              <xsl:when test="$countdown > 1">
                <xsl:value-of select="$countdown - 1"/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:choose>
                  <xsl:when test="$in-nested">
                    <xsl:value-of select="number($field-count) - 1"/>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="(number($item) * number($nested-field-count)) - 1"/>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:with-param>
          <xsl:with-param name="in-nested">
            <xsl:choose>
              <xsl:when test="number($countdown) = 0">
                <xsl:value-of select="boolean($in-nested)"/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="not(boolean($in-nested))"/>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:with-param>
          <xsl:with-param name="out">
            <xsl:value-of select="concat($out,$step)"/>
          </xsl:with-param>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:element name="results">
        <xsl:value-of select="concat($out,$step)"/>
        </xsl:element>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="counted-partition">
    <xsl:param name="list"/>
    <xsl:param name="size"/>
    <xsl:param name="delim"/>
    <xsl:variable name="actual-list" select="substring-after($list, $delim)"/>
    <xsl:call-template name="partition">
      <xsl:with-param name="list" select="$actual-list"/>
      <xsl:with-param name="size" select="$size"/>
      <xsl:with-param name="delim" select="$delim"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="partition">
    <xsl:param name="list"/>
    <xsl:param name="size"/>
    <xsl:param name="delim"/>
    <xsl:param name="step" select="number(0)"/>
    <xsl:param name="new-delim" select="string(',')"/>
    <xsl:param name="partition-delim" select="string(';')"/>
    <xsl:param name="out" select="string('')"/>
    <xsl:variable name="item">
      <xsl:choose>
        <xsl:when test="contains($list,$delim)">
          <xsl:value-of select="substring-before($list,$delim)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$list"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="temp-delim">
      <xsl:if test="$out and string-length($out) > 0">
        <xsl:choose>
          <xsl:when test="$step mod $size = 0">
            <xsl:value-of select="$partition-delim"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="$new-delim"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:if>
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="contains($list, $delim)">
        <xsl:call-template name="partition">
          <xsl:with-param name="list" select="substring-after($list, $delim)"/>
          <xsl:with-param name="size" select="$size"/>
          <xsl:with-param name="step" select="$step + 1"/>
          <xsl:with-param name="delim" select="$delim"/>
          <xsl:with-param name="new-delim" select="$new-delim"/>
          <xsl:with-param name="partition-delim" select="$partition-delim"/>
          <xsl:with-param name="out" select="concat($out,$temp-delim,$item)"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="concat($out,$temp-delim,$item)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="replace">
    <xsl:param name="haystack"/>
    <xsl:param name="needle"/>
    <xsl:param name="replacement"/>
    <xsl:param name="out" select="string('')"/>
    <xsl:variable name="item">
      <xsl:choose>
        <xsl:when test="contains($haystack,$needle)">
          <xsl:value-of select="substring-before($haystack,$needle)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$haystack"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="temp-replace">
      <xsl:if test="$out and string-length($out) > 0">
        <xsl:value-of select="$replacement"/>
      </xsl:if>
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="contains($haystack,$needle)">
        <xsl:call-template name="replace">
          <xsl:with-param name="haystack" select="substring-after($haystack,$needle)"/>
          <xsl:with-param name="needle" select="$needle"/>
          <xsl:with-param name="replacement" select="$replacement"/>
          <xsl:with-param name="out" select="concat($out,$temp-replace,$item)"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="concat($out,$temp-replace,$haystack)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>


  <xsl:template name="select">
    <xsl:param name="list"/>
    <xsl:param name="delim"/>
    <xsl:param name="indicies"/>
    <xsl:param name="index" select="number(0)"/>
    <xsl:param name="out" select="string('')"/>
    <xsl:variable name="item">
      <xsl:choose>
        <xsl:when test="contains($list,$delim)">
          <xsl:value-of select="substring-before($list,$delim)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$list"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="temp-delim">
      <xsl:if test="$out and string-length($out) > 0">
        <xsl:value-of select="$delim"/>
      </xsl:if>
    </xsl:variable>
    <xsl:variable name="step">
      <xsl:if test="contains($indicies,string($index))">
        <xsl:value-of select="concat($temp-delim,$item)"/>
      </xsl:if>
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="contains($list,$delim)">
        <xsl:call-template name="select">
          <xsl:with-param name="list" select="substring-after($list,$delim)"/>
          <xsl:with-param name="delim" select="$delim"/>
          <xsl:with-param name="indicies" select="$indicies"/>
          <xsl:with-param name="index" select="number($index) + 1"/>
          <xsl:with-param name="out" select="concat($out,$step)"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="concat($out,$step)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>


  <xsl:template name="take-n">
    <xsl:param name="list"/>
    <xsl:param name="delim"/>
    <xsl:param name="n"/>
    <xsl:param name="out" select="string('')"/>
    <xsl:variable name="item">
      <xsl:choose>
        <xsl:when test="contains($list,$delim)">
          <xsl:value-of select="substring-before($list,$delim)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$list"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="temp-delim">
      <xsl:if test="$out and string-length($out) > 0">
        <xsl:value-of select="$delim"/>
      </xsl:if>
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="contains($list,$delim) and number($n) > 1">
        <xsl:call-template name="take-n">
          <xsl:with-param name="list" select="substring-after($list,$delim)"/>
          <xsl:with-param name="delim" select="$delim"/>
          <xsl:with-param name="n" select="number($n) - 1"/>
          <xsl:with-param name="out" select="concat($out,$temp-delim,$item)"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="concat($out,$temp-delim,$item)"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>